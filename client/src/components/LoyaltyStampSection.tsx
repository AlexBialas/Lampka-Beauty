import { motion } from "framer-motion";

const LoyaltyStampSection = () => {
  return (
    <section className="bg-[#fdfdfd] py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">
        Program pieczątkowy 💖
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
        Zbierz <strong>5 pieczątek</strong> za wystawione opinie na Google i
        odbierz
        <span className="text-[#d6b3ba] font-semibold">
          {" "}
          rabat na kolejny zabieg!
        </span>
      </p>

      <motion.img
        src="/assets/stamp.png"
        alt="Pieczątka Lampka Beauty"
        className="mx-auto w-70 h-50"
        initial={{ scale: 0, rotate: -45, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          duration: 0.8,
        }}
        whileHover={{ scale: 1.1 }}
      />

      <p className="text-sm text-gray-500 mt-6 italic">
        * Pieczątki przyznajemy ręcznie po wystawieniu opinii Google 💌
      </p>
    </section>
  );
};

export default LoyaltyStampSection;
