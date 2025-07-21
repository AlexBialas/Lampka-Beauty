import { motion } from "framer-motion";
import reelsData from "../data/reelsData";

const InstagramReelsSection = () => {
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

      <div className="flex flex-wrap justify-center gap-8">
        {reelsData.map((reel, idx) => (
          <motion.div
            key={idx}
            className="w-[90%] max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white mx-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <iframe
              src={`${reel.url}embed`}
              title={reel.title}
              className="w-full h-full rounded-3xl"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
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
