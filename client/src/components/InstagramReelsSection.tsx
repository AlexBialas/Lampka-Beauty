import { motion } from "framer-motion";
import { useRef, useState } from "react";
import reelsData from "../data/reelsData";

const InstagramReelsSection = () => {
  const [playingStates, setPlayingStates] = useState<boolean[]>(
    Array(reelsData.length).fill(false)
  );
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      updatePlayingState(index, true);
    } else {
      video.pause();
      updatePlayingState(index, false);
    }
  };

  const updatePlayingState = (index: number, isPlaying: boolean) => {
    setPlayingStates((prev) => {
      const updated = [...prev];
      updated[index] = isPlaying;
      return updated;
    });
  };

  return (
    <section className="bg-[#f8f8f8] py-20 px-4 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Zobacz nas w akcji
      </motion.h2>

      <motion.p
        className="text-[#777] max-w-xl mx-auto text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Przykładowe rolki z naszego Instagrama – efekty zabiegów, porady i
        atmosfera.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {reelsData.map((reel, idx) => (
          <motion.div
            key={idx}
            className="relative w-[90%] max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white mx-auto group"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <video
                ref={(el) => (videoRefs.current[idx] = el!)}
                id={`video-${idx}`}
                src={reel.src}
                controls
                playsInline
                className={`w-full h-full object-cover rounded-3xl transition duration-300 ${
                  !playingStates[idx] ? "blur-sm scale-105 brightness-75" : ""
                }`}
                preload="metadata"
                onEnded={() => updatePlayingState(idx, false)}
              />

              <button
                onClick={() => toggleVideo(idx)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition group-hover:opacity-100"
              >
                {playingStates[idx] ? (
                  <svg
                    className="w-14 h-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-14 h-14 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="https://www.instagram.com/lampkabeauty/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#d6b3ba] hover:bg-[#a8b28c] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          Zobacz więcej na Instagramie
        </a>
      </motion.div>
    </section>
  );
};

export default InstagramReelsSection;
