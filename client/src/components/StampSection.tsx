import { motion } from "framer-motion";

const StampsSection = () => {
  return (
    <section className="bg-[#f9f6f5] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Zbieraj pieczątki i odbieraj nagrody 🎁
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Za każdą opinię na Google po wizycie otrzymujesz pieczątkę. Po 5 –
          dostajesz wyjątkowy rabat lub prezent od Lampka Beauty 💖
        </motion.p>

        <motion.img
          src="/assets/stamps/stamps-example.png"
          alt="Karta pieczątek"
          className="mx-auto w-full max-w-md rounded-xl shadow-xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.button
          className="bg-[#2d2d2d] text-white px-6 py-3 rounded-full shadow hover:bg-[#444] transition"
          whileHover={{ scale: 1.05 }}
        >
          Dowiedz się więcej
        </motion.button>
      </div>
    </section>
  );
};

export default StampsSection;
