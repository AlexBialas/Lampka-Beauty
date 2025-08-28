import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import teamDataRaw from "../data/teamData";

const teamData = [
  ...teamDataRaw.filter((p) => p.name === "Daria Lampka"),
  ...teamDataRaw.filter((p) => p.name !== "Daria Lampka"),
];

const MeetTheTeamPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = teamData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const getClass = (index: number) => {
    if (index === currentIndex) return "z-30 scale-[1.07] rotate-y-0 blur-0";
    if (index === (currentIndex + 1) % total)
      return "translate-x-[200px] rotate-y-[-30deg] scale-90 z-10 opacity-40 blur-[2px]";
    if (index === (currentIndex - 1 + total) % total)
      return "-translate-x-[200px] rotate-y-[30deg] scale-90 z-10 opacity-40 blur-[2px]";
    return "hidden";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#fdfcfc] to-[#f7f2f2] py-24 px-4 text-center overflow-hidden"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Poznaj każdą z nas
      </motion.h2>
      <motion.p
        className="text-[#777] max-w-2xl mx-auto text-lg mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Zespół Lampka Beauty to kobiety z pasją, doświadczeniem i sercem do
        piękna. Przesuwaj i poznaj nas bliżej.
      </motion.p>

      <div className="relative w-full flex items-center justify-center perspective-[2000px]">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-8 bg-[#d6b3ba] hover:bg-[#a8b28c] text-white p-3 rounded-full shadow-md z-40"
        >
          ❮
        </button>

        <div className="relative flex items-center justify-center w-[320px] md:w-[560px] h-[520px] md:h-[660px]">
          {teamData.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`absolute transition-all duration-1000 ease-in-out transform-style preserve-3d ${getClass(
                index
              )} bg-white/80 backdrop-blur-lg p-6 md:p-10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/30 max-w-full w-[300px] md:w-[540px]`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-36 md:w-64 h-auto object-contain mb-6 drop-shadow-xl rounded-xl border border-white shadow-inner"
                />
                <h3 className="text-lg md:text-2xl font-bold text-[#2d2d2d] mb-1">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base text-[#888] mb-2">
                  {person.role}
                </p>
                <p className="text-sm md:text-base text-gray-700 mb-2 leading-relaxed text-center max-w-md">
                  {person.bio}
                </p>
                {person.instagram && (
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm md:text-base text-[#d6b3ba] hover:text-[#a8b28c] transition mt-2"
                  >
                    <FaInstagram /> Instagram
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-8 bg-[#d6b3ba] hover:bg-[#a8b28c] text-white p-3 rounded-full shadow-md z-40"
        >
          ❯
        </button>
      </div>
    </motion.section>
  );
};

export default MeetTheTeamPage;
