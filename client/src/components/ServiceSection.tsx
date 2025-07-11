import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const services = [
    {
      title: "Pielęgnacja twarzy",
      description: "Zabiegi oczyszczające, nawilżające i przeciwstarzeniowe.",
      icon: "💆‍♀️",
    },
    {
      title: "Manicure & Pedicure",
      description: "Klasyczny, hybrydowy oraz spa manicure i pedicure.",
      icon: "💅",
    },
    {
      title: "Makijaż",
      description: "Profesjonalny makijaż dzienny, wieczorowy i ślubny.",
      icon: "💄",
    },
    {
      title: "Masaże relaksacyjne",
      description: "Zrelaksuj ciało i umysł dzięki naszym masażom.",
      icon: "🧖‍♀️",
    },
  ];

  return (
    <section className="bg-pink-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12">
          {" "}
          Nasze Usługi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
