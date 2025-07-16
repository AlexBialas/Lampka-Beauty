import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MeetTheTeamSection = () => {
  return (
    <section
      id="team"
      className="relative bg-[#fdfbf6] py-32 px-6 overflow-hidden"
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7b9b6d] opacity-10 blur-[160px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#d4d4d4] opacity-20 blur-[160px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-[#7b9b6d] to-[#d4d4d4] mb-6 rounded" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] leading-snug mb-6">
            Poznaj nasz zespół
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-xl">
            Jesteśmy zespołem kobiet z pasją do piękna i troski. Tworzymy
            atmosferę zaufania, profesjonalizmu i ciepła – tak, by każda
            klientka czuła się wyjątkowo. Kliknij i poznaj każdą z nas bliżej.
          </p>

          <Link
            to="/team"
            className="inline-block bg-[#7b9b6d] hover:bg-[#67845a] text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider shadow-md transition duration-300"
          >
            Poznaj każdą z nas
          </Link>
        </motion.div>

        {/* IMAGE WITH SUBTLE EFFECT */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/team.jpg"
            alt="Zespół Lampka Beauty"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          {/* Border effect (subtle) */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
