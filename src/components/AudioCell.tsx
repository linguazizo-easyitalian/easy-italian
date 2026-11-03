import { useRef, useState, useEffect } from 'react';
import { Mic, Square, Play, RotateCcw, Volume2, Check, Loader2 } from 'lucide-react';
import { supabase } from '../config/supabase';
import { useIsOwner } from '../hooks/useIsOwner';
import { useAuth } from '../contexts/AuthContext';

type RecorderState = 'idle' | 'recording' | 'recorded' | 'uploading' | 'uploaded' | 'error';

export function AudioCell({ wordKey, accentColor }: { wordKey: string; accentColor: string }) {
  const { isOwner, checking } = useIsOwner();
  const { getIdToken } = useAuth();
  const [state, setState] = useState<RecorderState>('idle');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [approvedUrl, setApprovedUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [rerecording, setRerecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobRef = useRef<Blob | null>(null);

  useEffect(() => {
    let mounted = true;
    supabase
      .from('word_audio')
      .select('storage_path')
      .eq('word_key', wordKey)
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data }) => {
        if (!mounted || !data) return;
        const { data: pub } = supabase.storage.from('word-audio').getPublicUrl(data.storage_path);
        if (pub?.publicUrl) setApprovedUrl(pub.publicUrl);
      });
    return () => {
      mounted = false;
    };
  }, [wordKey]);

  async function startRecording() {
    setErrorMsg('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new MediaRecorder(stream);
      chunksRef.current = [];
      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        blobRef.current = blob;
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        setAudioUrl(URL.createObjectURL(blob));
        setState('recorded');
      };
      mediaRecorderRef.current = mr;
      mr.start();
      setState('recording');
    } catch {
      setErrorMsg('Microphone access denied.');
      setState('error');
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
  }

  function playLocal() {
    audioRef.current?.play();
  }

  function reset() {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    blobRef.current = null;
    setRerecording(false);
    setState('idle');
  }

  async function uploadAndApprove() {
    if (!blobRef.current) return;
    setState('uploading');

    const firebaseToken = await getIdToken();

    if (!firebaseToken) {
      setErrorMsg('Not signed in as owner.');
      setState('error');
      return;
    }

    const formData = new FormData();
    formData.append('word_key', wordKey);
    formData.append('audio', blobRef.current, `${wordKey.replace(/[^a-zA-Z0-9]/g, '_')}.webm`);

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-word-audio`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${firebaseToken}` },
          body: formData,
        }
      );

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Upload failed' }));
        setErrorMsg(err.error || 'Upload failed.');
        setState('error');
        return;
      }

      const result = await resp.json();
      if (result.publicUrl) setApprovedUrl(result.publicUrl);
    } catch {
      setErrorMsg('Network error.');
      setState('error');
      return;
    }

    setRerecording(false);
    setState('uploaded');
  }

  // While ownership is still being verified, show nothing so we don't flash
  // the visitor view at a signed-in owner.
  if (checking) return null;

  // === Visitor view: play-only ===
  // If there's an approved recording and the current user is NOT the owner,
  // show only a play button. Visitors cannot record or re-record.
  if (approvedUrl && !isOwner) {
    return (
      <div className="flex items-center gap-1.5">
        <audio ref={audioRef} src={approvedUrl} className="hidden" />
        <button
          onClick={() => audioRef.current?.play()}
          className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-all hover:scale-110 shadow-sm"
          style={{ backgroundColor: accentColor }}
          title="Play pronunciation"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // === No recording yet and not owner: show nothing ===
  if (!approvedUrl && !isOwner) {
    return null;
  }

  // === Owner view: record / re-record / play ===
  if (approvedUrl && !rerecording && state !== 'recording' && state !== 'recorded') {
    return (
      <div className="flex items-center gap-1.5">
        <audio ref={audioRef} src={approvedUrl} className="hidden" />
        <button
          onClick={() => audioRef.current?.play()}
          className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-all hover:scale-110 shadow-sm"
          style={{ backgroundColor: accentColor }}
          title="Play pronunciation"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setRerecording(true); setState('idle'); }}
          className="flex items-center justify-center w-7 h-7 rounded-full text-white/80 hover:text-white transition-all"
          style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
          title="Record a new version"
        >
          <Mic className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="flex items-center gap-1.5">
        <audio ref={audioRef} src={audioUrl ?? undefined} className="hidden" />
        {state === 'idle' && (
          <button
            onClick={startRecording}
            className="flex items-center justify-center w-8 h-8 rounded-full text-white transition-all hover:scale-110 shadow-sm"
            style={{ backgroundColor: accentColor }}
            title="Record pronunciation"
          >
            <Mic className="w-4 h-4" />
          </button>
        )}
        {state === 'recording' && (
          <button
            onClick={stopRecording}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all hover:scale-110 shadow-sm animate-pulse"
            title="Stop recording"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        )}
        {state === 'recorded' && (
          <div className="flex items-center gap-1.5">
            <button
              onClick={playLocal}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all hover:scale-110 shadow-sm"
              title="Preview recording"
            >
              <Play className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={uploadAndApprove}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110 shadow-sm"
              title="Approve and publish"
            >
              <Check className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={reset}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 hover:bg-gray-500 text-white transition-all hover:scale-110 shadow-sm"
              title="Discard and re-record"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        {state === 'uploading' && (
          <div className="flex items-center gap-1.5">
            <Loader2 className="w-4 h-4 animate-spin" style={{ color: accentColor }} />
            <span className="text-xs" style={{ color: accentColor }}>Saving…</span>
          </div>
        )}
        {state === 'uploaded' && (
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-emerald-600">Published</span>
          </div>
        )}
        {state === 'error' && (
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-red-500">{errorMsg}</span>
            <button
              onClick={reset}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-400 hover:bg-gray-500 text-white transition-all"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
