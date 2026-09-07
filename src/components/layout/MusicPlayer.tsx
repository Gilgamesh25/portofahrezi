"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_VIDEO_ID = "rk-UeMG05N8";
const SONG_TITLE = "NOAH Feat. Momo GEISHA - Cobalah Mengerti";

type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  destroy: () => void;
};

type YouTubePlayerEvent = {
  data: number;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        config: {
          height: string;
          width: string;
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: () => void;
            onStateChange?: (event: YouTubePlayerEvent) => void;
          };
        },
      ) => YouTubePlayer;
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (!youtubeApiPromise) {
    youtubeApiPromise = new Promise((resolve) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        resolve();
      };

      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    });
  }

  return youtubeApiPromise;
}

export function MusicPlayer() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function initPlayer() {
      await loadYouTubeApi();
      if (!mounted || !window.YT) return;

      playerRef.current = new window.YT.Player("youtube-music-player", {
        height: "0",
        width: "0",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            if (mounted) setIsReady(true);
          },
          onStateChange: (event) => {
            if (!mounted || !window.YT) return;

            const { ENDED, PLAYING, PAUSED } = window.YT.PlayerState;
            if (event.data === PLAYING) {
              setIsPlaying(true);
            } else if (event.data === PAUSED || event.data === ENDED) {
              setIsPlaying(false);
            }
          },
        },
      });
    }

    void initPlayer();

    return () => {
      mounted = false;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  const togglePlayback = useCallback(() => {
    const player = playerRef.current;
    if (!player || !isReady) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }, [isPlaying, isReady]);

  return (
    <>
      <div id="youtube-music-player" className="sr-only" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 safe-bottom"
      >
        <div className="flex items-center gap-2.5 md:gap-3 rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-xl border border-primary/8 px-3 py-2.5 md:px-4 md:py-3 shadow-lg shadow-primary/5">
          <div className="relative flex items-center justify-center shrink-0">
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-accent/10 rounded-full blur-md"
                />
              )}
            </AnimatePresence>

            <div
              className={`relative h-9 w-9 md:h-10 md:w-10 rounded-full border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-primary/15 shadow-inner ${
                isPlaying ? "animate-spin" : ""
              }`}
              style={{ animationDuration: "2.5s" }}
              aria-hidden="true"
            >
              <span className="absolute inset-1 rounded-full border border-primary/5" />
              <span className="absolute inset-2 rounded-full border border-primary/3" />
              <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 md:h-3 md:w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-white" />
            </div>

            <AnimatePresence>
              {isPlaying && (
                <div className="absolute -right-0.5 md:-right-1 top-1/2 -translate-y-1/2 flex gap-px">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 2 }}
                      animate={{
                        height: [2, 6 + i * 2, 3, 8, 2],
                      }}
                      transition={{
                        duration: 0.8 + i * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }}
                      className="w-px md:w-0.5 bg-accent rounded-full"
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-1 md:gap-1.5 min-w-0">
            <span className="text-[10px] md:text-xs font-medium text-secondary/50 leading-none max-w-[90px] md:max-w-[120px] truncate">
              {SONG_TITLE}
            </span>

            <button
              type="button"
              onClick={togglePlayback}
              disabled={!isReady}
              className="inline-flex items-center gap-1 md:gap-1.5 rounded-md md:rounded-lg bg-accent/10 px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-1 disabled:cursor-wait disabled:opacity-60"
              aria-label={`${isPlaying ? "Hentikan" : "Putar"} musik ${SONG_TITLE}`}
            >
              {!isReady ? (
                <>
                  <span className="h-2.5 w-2.5 md:h-3 md:w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Load
                </>
              ) : isPlaying ? (
                <>
                  <svg className="h-2.5 w-2.5 md:h-3 md:w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 6h3v12H7V6zm7 0h3v12h-3V6z" />
                  </svg>
                  Stop
                </>
              ) : (
                <>
                  <svg className="h-2.5 w-2.5 md:h-3 md:w-3 translate-x-px" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
