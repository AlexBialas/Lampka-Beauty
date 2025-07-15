import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Mezoterapia igłowa",
    description:
      "Odmładzający zabieg na twarz i dekolt. Widoczne efekty już po pierwszej serii.",
    image: "/assets/mezoterapia.jpg", // Uwaga: bez "/public"
    price: "od 350 PLN",
  },
  {
    title: "Manicure hybrydowy",
    description:
      "Zadbane dłonie i trwały efekt. Wybierz swój idealny kolor i kształt paznokci.",
    image: "/assets/manicure.jpg",
    price: "od 100 PLN",
  },
  {
    title: "Stylizacja brwi",
    description:
      "Koloryzacja henną pudrową z geometrią i regulacją. Naturalny efekt i trwałość.",
    image: "/assets/brwi.jpg",
    price: "od 90 PLN",
  },
];

const OurServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-[#f9f9f7] min-h-screen py-20 px-4 flex flex-col justify-center"
    >
      {/* Nagłówek */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-[#1e1e1e]">
          Nasze usługi
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
          Poznaj wybrane zabiegi, które cieszą się największą popularnością
          wśród naszych Klientek.
        </p>
      </div>

      {/* Kafelki usług */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#b9c7af] rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {service.description}
              </p>
              <p className="text-black font-semibold text-sm">
                {service.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="text-center mt-16">
        <Link
          to="/uslugi"
          className="relative group inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-sm uppercase tracking-widest text-white transition-all duration-300 bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10">Zobacz wszystkie zabiegi</span>
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
        </Link>
      </div>
    </section>
  );
};

export default OurServicesSection;
