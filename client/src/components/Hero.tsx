import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm" />

      <motion.div
        className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4 uppercase">
          Lampka Beauty
        </h1>
        <p className="text-md md:text-lg font-normal tracking-wide leading-relaxed mb-8">
          Miejsce, w którym piękno spotyka troskę
        </p>

        <a
          href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:translate-y-1"
        >
          <FaCalendarCheck className="text-white text-lg group-hover:text-pink-300 transition duration-300" />
          <span>Umów wizytę</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
