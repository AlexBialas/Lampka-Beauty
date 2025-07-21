import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import galleryData from "../data/galleryData";

const categories = ["Wszystkie", "Paznokcie", "Rzęsy", "Brwi", "Twarz"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const filteredPhotos =
    selectedCategory === "Wszystkie"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  const visiblePhotos = filteredPhotos.slice(0, 3);

  return (
    <section className="bg-white py-20 px-4 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galeria naszych zabiegów
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-[#d6b3ba] text-white border-[#d6b3ba]"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#d6b3ba]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visiblePhotos.map((item, idx) => (
          <motion.div
            key={`${item.url}-${idx}`}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <img
              src={item.url}
              alt={item.category}
              className="w-full h-64 object-cover hover:scale-105 transition duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          to="/galeria"
          className="inline-block bg-[#d6b3ba] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c19ea5] transition duration-300"
        >
          Zobacz więcej zdjęć
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
