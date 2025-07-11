import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-rose-100 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-6">
          Zasługujesz na chwilę dla siebie
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Umów wizytę już teraz i pozwól nam zadbać o Twoje piękno.
        </p>
        <Link to="/booking">
          <button className="bg-rose-500 text-white py-3 px-6 rounded-full text-lg shadow-md hover:bg-rose-600 transition">
            Zarezerwuj wizytę
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
