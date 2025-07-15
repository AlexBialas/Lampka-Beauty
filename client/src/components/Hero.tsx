import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/assets/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-light tracking-widest mb-4 uppercase">
          Lampka Beauty
        </h1>
        <p className="text-md md:text-lg font-light tracking-wide mb-8">
          Miejsce, w którym piękno spotyka troskę
        </p>

        <a
          href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-sm uppercase tracking-widest text-white transition-all duration-300 bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
          <span className="relative z-10">Umów wizytę</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
