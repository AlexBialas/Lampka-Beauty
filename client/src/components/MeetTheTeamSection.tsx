import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MeetTheTeamSection = () => {
  return (
    <section
      id="team"
      className="bg-[#fdfbf6] py-24 px-6 h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7b9b6d] to-[#d4d4d4] mb-4 rounded" />

          <motion.h2
            className="text-4xl font-bold text-[#1e1e1e] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Poznaj nasz zespół
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tworzymy zespół kobiet, które kochają to, co robią. Profesjonalizm,
            uśmiech i indywidualne podejście – to znajdziesz u nas w Lampka
            Beauty. Kliknij i poznaj nas bliżej!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/team"
              className="inline-block bg-[#7b9b6d] text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider shadow-md hover:bg-[#67845a] transition duration-300"
            >
              Poznaj każdą z nas
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="rounded-xl overflow-hidden shadow-xl border border-[#e4e4e4]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/team.jpg"
            alt="Zespół Lampka Beauty"
            className="w-full object-cover h-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
