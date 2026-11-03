import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const FIREBASE_API_KEY = "AIzaSyCcshnh64v_UAgHMpOpiEXw1DqG94tHP5I";

interface FirebaseUserResponse {
  users: Array<{ email: string | null }>;
}

async function verifyFirebaseToken(idToken: string): Promise<string | null> {
  const resp = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    }
  );
  if (!resp.ok) return null;
  const data: FirebaseUserResponse = await resp.json();
  return data.users?.[0]?.email ?? null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Missing auth token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const idToken = authHeader.replace("Bearer ", "");

    const email = await verifyFirebaseToken(idToken);
    if (!email) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: ownerRow } = await supabase
      .from("app_owners")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (!ownerRow) {
      return new Response(JSON.stringify({ error: "Not authorized" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const formData = await req.formData();
    const wordKey = formData.get("word_key") as string;
    const audioFile = formData.get("audio") as File;

    if (!wordKey || !audioFile) {
      return new Response(JSON.stringify({ error: "Missing word_key or audio" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const safeKey = wordKey.replace(/[^a-zA-Z0-9]/g, "_");
    const fileName = `${safeKey}-${Date.now()}.webm`;
    const filePath = `${safeKey}/${fileName}`;

    const arrayBuffer = await audioFile.arrayBuffer();

    const { error: upErr } = await supabase.storage
      .from("word-audio")
      .upload(filePath, arrayBuffer, { contentType: "audio/webm" });

    if (upErr) {
      return new Response(JSON.stringify({ error: "Upload failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { error: dbErr } = await supabase
      .from("word_audio")
      .insert({ word_key: wordKey, storage_path: filePath, approved: true });

    if (dbErr) {
      return new Response(JSON.stringify({ error: "Database error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: pub } = supabase.storage.from("word-audio").getPublicUrl(filePath);

    return new Response(
      JSON.stringify({ publicUrl: pub.publicUrl, filePath }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
