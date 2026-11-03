/*
# Lock down word_audio to owner-only writes, public reads

## Summary
This migration converts the `word_audio` table and the `word-audio` storage bucket
from "anyone can write" to "public can read, only the app owner can write."

## Changes

### New Tables
- `app_owners`
  - `email` (text, primary key) — the email address of the app owner.
    Only rows in this table are allowed to insert/update/delete audio recordings.

### New Functions
- `is_app_owner()` (SECURITY DEFINER) — returns true if the current Supabase
  authenticated user's email exists in `app_owners`. Used by RLS policies to gate
  writes on `word_audio` and `storage.objects`.

### Security Changes
- `word_audio` table:
  - SELECT: public (anon + authenticated) — anyone can see approved recordings.
  - INSERT: only the app owner (via `is_app_owner()`).
  - UPDATE: only the app owner.
  - DELETE: only the app owner.
- `storage.objects` bucket `word-audio`:
  - SELECT (read): public — visitors can play approved audio.
  - INSERT (upload): only the app owner.
  - UPDATE: only the app owner.
  - DELETE: only the app owner.

### Important Notes
1. The app uses Firebase Google Sign-In for authentication, NOT Supabase Auth.
   A separate edge function verifies the Firebase JWT and issues a Supabase session
   with the user's email injected into the JWT. The `is_app_owner()` function checks
   the email claim in the JWT.
2. You must add your Google account email to the `app_owners` table after this
   migration runs.
*/

CREATE TABLE IF NOT EXISTS app_owners (
  email text PRIMARY KEY,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE app_owners ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_app_owners" ON app_owners;
CREATE POLICY "anon_read_app_owners"
ON app_owners FOR SELECT
TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION is_app_owner()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM app_owners
    WHERE email = COALESCE(
      auth.jwt() ->> 'email',
      auth.jwt() -> 'user_metadata' ->> 'email',
      auth.jwt() -> 'app_metadata' ->> 'email'
    )
  );
$$;

-- === word_audio: tighten write policies ===

DROP POLICY IF EXISTS "anon_select_word_audio" ON word_audio;
CREATE POLICY "anon_select_word_audio"
ON word_audio FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_word_audio" ON word_audio;
CREATE POLICY "owner_insert_word_audio"
ON word_audio FOR INSERT
TO authenticated WITH CHECK (is_app_owner());

DROP POLICY IF EXISTS "anon_update_word_audio" ON word_audio;
CREATE POLICY "owner_update_word_audio"
ON word_audio FOR UPDATE
TO authenticated USING (is_app_owner()) WITH CHECK (is_app_owner());

DROP POLICY IF EXISTS "anon_delete_word_audio" ON word_audio;
CREATE POLICY "owner_delete_word_audio"
ON word_audio FOR DELETE
TO authenticated USING (is_app_owner());

-- === storage.objects bucket 'word-audio': tighten write policies ===

DROP POLICY IF EXISTS "anon_read_word_audio_bucket" ON storage.objects;
CREATE POLICY "anon_read_word_audio_bucket"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'word-audio');

DROP POLICY IF EXISTS "anon_insert_word_audio_bucket" ON storage.objects;
CREATE POLICY "owner_insert_word_audio_bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'word-audio' AND is_app_owner());

DROP POLICY IF EXISTS "anon_update_word_audio_bucket" ON storage.objects;
CREATE POLICY "owner_update_word_audio_bucket"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'word-audio' AND is_app_owner())
WITH CHECK (bucket_id = 'word-audio' AND is_app_owner());

DROP POLICY IF EXISTS "anon_delete_word_audio_bucket" ON storage.objects;
CREATE POLICY "owner_delete_word_audio_bucket"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'word-audio' AND is_app_owner());
