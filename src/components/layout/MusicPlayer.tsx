"use client";

import { useRef, useState } from "react";

const SONG_SRC = "/audio/fajar-noor-tahta-hatiku.mp3";
const SONG_TITLE = "Fajar Noor - Tahta Hatiku";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={SONG_SRC}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={togglePlayback}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={`${isPlaying ? "Hentikan" : "Putar"} musik ${SONG_TITLE}`}
        title={SONG_TITLE}
      >
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
          aria-hidden="true"
        >
          {isPlaying ? (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 6h3v12H7V6zm7 0h3v12h-3V6z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 translate-x-px" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          )}
        </span>
        {isPlaying ? "Stop Musik" : "Play Musik"}
      </button>
    </>
  );
}
