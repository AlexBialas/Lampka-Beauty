import FadeIn from "./animations/FadeInWhenVisible";

const benefits = [
  {
    title: "Ekspertyza",
    description:
      "Każda wizyta prowadzona jest przez doświadczonych specjalistów, którzy rozumieją Twoją skórę i potrzeby.",
    icon: "🧠",
  },
  {
    title: "Regularność",
    description:
      "Regularna pielęgnacja to trwałe efekty. Twoja rutyna piękna ewoluuje razem z Tobą.",
    icon: "🗓️",
  },
  {
    title: "Społeczność",
    description:
      "Dołącz do wspierającej i inspirującej społeczności, która rozwija się razem z Tobą.",
    icon: "💬",
  },
  {
    title: "Zaangażowanie",
    description:
      "To inwestycja w siebie. Bez wymówek. Tylko troska o własne piękno.",
    icon: "💖",
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-[#fdfbf6] py-20 px-4 text-center">
      <FadeIn direction="up">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2d2d2d]">
          Dlaczego warto wybrać Lampka Beauty?
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} direction="up" delay={index * 0.2}>
            <div className="p-6 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition duration-300 h-full">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
