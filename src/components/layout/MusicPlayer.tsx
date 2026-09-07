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

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-primary/95 px-3 py-2 text-white shadow-card backdrop-blur-sm">
        <div
          className={`relative h-11 w-11 rounded-full border-2 border-white/40 bg-linear-to-br from-neutral-800 via-neutral-900 to-black shadow-inner ${
            isPlaying ? "animate-spin" : ""
          }`}
          style={{ animationDuration: "2.2s" }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-primary/90" />
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-primary"
          aria-label={`${isPlaying ? "Hentikan" : "Putar"} musik ${SONG_TITLE}`}
          title={SONG_TITLE}
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
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
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </>
  );
}
