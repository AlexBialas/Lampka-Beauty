import { motion } from "framer-motion";
import React, { useState } from "react";

const servicesData = [
  {
    category: "Dłonie i stopy",
    items: [
      {
        name: "Manicure hybrydowy",
        price: "160 zł",
        description: "Trwały manicure do 3 tygodni.",
      },
      {
        name: "Pedicure SPA z gorącą parafiną",
        price: "220 zł",
        description: "Głębokie nawilżenie i relaks.",
      },
      {
        name: "Zdobienia / French",
        price: "150–190 zł",
        description: "Spersonalizowane zdobienia.",
      },
    ],
  },
  {
    category: "Brwi i rzęsy",
    items: [
      {
        name: "Laminacja brwi z geometrią i farbką",
        price: "180 zł",
        description: "Precyzyjne ułożenie w pełnej symetrii.",
      },
      {
        name: "Henna pudrowa brwi + regulacja + wolumetria",
        price: "130 zł",
        description: "Efekt pełnych, wyrazistych brwi.",
      },
      {
        name: "Laminacja rzęs Elleebana",
        price: "160 zł",
        description: "Podkręcenie i odżywienie rzęs.",
      },
    ],
  },
  {
    category: "Twarz i oczyszczanie",
    items: [
      {
        name: "Peeling kawitacyjny",
        price: "150 zł",
        description: "Usunięcie zanieczyszczeń i wygładzenie cery.",
      },
      {
        name: "Hydra Touch 5-etapowe oczyszczanie wodne",
        price: "350 zł",
        description: "Głębokie oczyszczanie i lifting.",
      },
      {
        name: "BioRePeelCL3 + mezoterapia",
        price: "500 zł",
        description: "Peeling + mikroigłowa regeneracja.",
      },
    ],
  },
  {
    category: "Medycyna Estetyczna",
    items: [
      {
        name: "Konsultacja lekarska",
        price: "250 zł (30 min)",
        description: "Wywiad + plan zabiegowy.",
      },
      {
        name: "Botoks",
        price: "450 zł",
        description: "Redukcja zmarszczek mimicznych.",
      },
      {
        name: "Lip Flip",
        price: "450 zł",
        description: "Delikatne uniesienie górnej wargi.",
      },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(
    servicesData[0].category
  );

  const filteredSection = servicesData.find(
    (s) => s.category === activeCategory
  );

  return (
    <section className="bg-[#fdfbf6] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-4">
          Nasze usługi i zabiegi
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Pełna oferta Lampka Beauty, inspirowana profilem Booksy – wybierz
          kategorię.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {servicesData.map((section) => (
          <button
            key={section.category}
            className={`px-4 py-2 rounded-full font-medium ${
              section.category === activeCategory
                ? "bg-[#7b9b6d] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(section.category)}
          >
            {section.category}
          </button>
        ))}
      </div>

      {filteredSection && (
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-[#7b9b6d] mb-6">
            {filteredSection.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filteredSection.items.map((service, i) => (
              <motion.div
                key={i}
                className="group [perspective:1000px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-64 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] bg-white rounded-xl shadow-md">
                  <div className="absolute inset-0 [backface-visibility:hidden] p-6 flex flex-col justify-center items-center rounded-xl bg-white">
                    <h3 className="text-xl font-semibold text-[#2d2d2d] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-500">{service.price}</p>
                  </div>
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 flex items-center justify-center rounded-xl bg-[#f7f7f7] text-gray-700">
                    <p className="text-center text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
