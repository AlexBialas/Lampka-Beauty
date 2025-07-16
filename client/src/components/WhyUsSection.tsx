import FadeIn from "./animations/FadeInWhenVisible";
import { BiSolidBrain } from "react-icons/bi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { FaHandsHelping, FaHeart } from "react-icons/fa";

const benefits = [
  {
    title: "Ekspertyza",
    description:
      "Nasze specjalistki rozumieją potrzeby Twojej skóry – każda wizyta to indywidualne podejście i realne efekty.",
    icon: <BiSolidBrain className="text-4xl text-[#b48c6d]" />,
  },
  {
    title: "Regularność",
    description:
      "Piękno to proces. Pomagamy Ci zbudować rytuał pielęgnacji, który rośnie razem z Tobą.",
    icon: <RiCalendarCheckLine className="text-4xl text-[#b48c6d]" />,
  },
  {
    title: "Społeczność",
    description:
      "Jesteś częścią wspierającej społeczności, w której kobiety wzajemnie inspirują się do dbania o siebie.",
    icon: <FaHandsHelping className="text-4xl text-[#b48c6d]" />,
  },
  {
    title: "Zaangażowanie",
    description:
      "Każdy zabieg to inwestycja w Twoje samopoczucie, pewność siebie i balans w codzienności.",
    icon: <FaHeart className="text-4xl text-[#b48c6d]" />,
  },
];

const WhyUsSection = () => {
  return (
    <section
      className="relative py-24 px-6 text-center bg-[#fbf9f6] overflow-hidden"
      id="why-us"
    >
      {/* Subtelne tło z parallax */}
      <div
        className="absolute inset-0 bg-[url('/assets/bg-whyus.jpg')] bg-cover bg-center opacity-10"
        style={{ backgroundAttachment: "fixed", zIndex: -1 }}
      />

      <FadeIn direction="up">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2d2d2d] tracking-tight leading-snug">
          Dlaczego warto wybrać{" "}
          <span className="text-[#b48c6d]">Lampka Beauty</span>?
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} direction="up" delay={index * 0.2}>
            <div className="backdrop-blur-md bg-white/60 rounded-3xl border border-white/20 shadow-2xl p-8 h-full flex flex-col items-center text-[#2d2d2d] hover:scale-[1.02] transition duration-300 ease-in-out">
              <div className="mb-5">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-3 uppercase tracking-wider">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
