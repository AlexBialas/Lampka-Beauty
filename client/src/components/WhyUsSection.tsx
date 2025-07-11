const benefits = [
  {
    title: "Expertise",
    description:
      "Each visit is led by experienced professionals who understand your skin and needs.",
    icon: "🧠", // Na razie emoji, potem ikony SVG
  },
  {
    title: "Consistency",
    description:
      "Regular care builds long-lasting results. Your beauty routine evolves with you.",
    icon: "🗓️",
  },
  {
    title: "Community",
    description:
      "Be part of a supportive and inspiring beauty community that grows together.",
    icon: "💬",
  },
  {
    title: "Commitment",
    description:
      "This is self-investment. No apologies. Just dedication to your own care.",
    icon: "💖",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-[#fdfbf6] py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-10 text-[#2d2d2d]">
        Why Choose Lampka Beauty?
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="p-6 bg-white shadow-md rounded-xl"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
