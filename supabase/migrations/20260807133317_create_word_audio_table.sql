/*
# Create word_audio table and audio bucket

1. New Tables
- `word_audio`
  - `id` (uuid, primary key)
  - `word_key` (text, not null) — unique key identifying the word, e.g. "padre / papà"
  - `storage_path` (text, not null) — path in the audio bucket where the file is stored
  - `approved` (boolean, default false) — only approved recordings are shown to visitors
  - `created_at` (timestamptz, default now())

2. Storage
- Create a public bucket `word-audio` for storing audio files.
  - Public read so visitors can play approved recordings without auth.
  - Upload restricted via storage policies to anon+authenticated (single-tenant, no-auth app).

3. Security
- Enable RLS on `word_audio`.
- SELECT: anon + authenticated can read rows (so visitors can see approved audio).
- INSERT: anon + authenticated can insert new recordings (pending approval).
- UPDATE: anon + authenticated can update rows (used for approval toggle).
- DELETE: anon + authenticated can delete rows.
- Storage bucket `word-audio`: public read; anon+authenticated can upload.
*/

CREATE TABLE IF NOT EXISTS word_audio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  word_key text NOT NULL,
  storage_path text NOT NULL,
  approved boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_word_audio_word_key ON word_audio(word_key);

ALTER TABLE word_audio ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_word_audio" ON word_audio;
CREATE POLICY "anon_select_word_audio"
ON word_audio FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_word_audio" ON word_audio;
CREATE POLICY "anon_insert_word_audio"
ON word_audio FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_word_audio" ON word_audio;
CREATE POLICY "anon_update_word_audio"
ON word_audio FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_word_audio" ON word_audio;
CREATE POLICY "anon_delete_word_audio"
ON word_audio FOR DELETE
TO anon, authenticated USING (true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('word-audio', 'word-audio', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "anon_read_word_audio_bucket" ON storage.objects;
CREATE POLICY "anon_read_word_audio_bucket"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'word-audio');

DROP POLICY IF EXISTS "anon_insert_word_audio_bucket" ON storage.objects;
CREATE POLICY "anon_insert_word_audio_bucket"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'word-audio');

DROP POLICY IF EXISTS "anon_update_word_audio_bucket" ON storage.objects;
CREATE POLICY "anon_update_word_audio_bucket"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'word-audio') WITH CHECK (bucket_id = 'word-audio');

DROP POLICY IF EXISTS "anon_delete_word_audio_bucket" ON storage.objects;
CREATE POLICY "anon_delete_word_audio_bucket"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'word-audio');
