import { motion } from "framer-motion";
import { contactInfo } from "../data/footerData";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-[#fdfbf6] min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* LEWA KOLUMNA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-6">
            Skontaktuj się z nami
          </h1>
          <p className="text-gray-700 mb-10 text-lg max-w-lg">
            Masz pytania lub chcesz zarezerwować wizytę? Wypełnij formularz lub
            skontaktuj się z nami bezpośrednio.
          </p>

          <div className="space-y-4 text-gray-800 text-md">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#7b9b6d]" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#7b9b6d]" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#7b9b6d]" />
              <span>Lokalizacja: Poznań, Polska</span>
            </div>
          </div>

          <div className="mt-10 rounded overflow-hidden shadow-md border border-[#e5e5e5]">
            <iframe
              title="Lokalizacja Lampka Beauty"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5850300895695!2d16.93789759323517!3d52.432316270627794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045be1601a30bb%3A0xac312e08b27fb6fb!2sLampka%20Beauty!5e0!3m2!1spl!2spl!4v1752476629290!5m2!1spl!2spl"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>

        {/* PRAWA KOLUMNA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-[#e6e6e6]"
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#1e1e1e]">
            Napisz do nas
          </h2>
          <form className="space-y-6">
            <div>
              <label className="text-sm block text-gray-700 mb-1">
                Imię i nazwisko
              </label>
              <input
                type="text"
                placeholder="Twoje imię"
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#7b9b6d] placeholder-gray-500"
              />
            </div>

            <div>
              <label className="text-sm block text-gray-700 mb-1">
                Adres e-mail
              </label>
              <input
                type="email"
                placeholder="twoj@email.com"
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#7b9b6d] placeholder-gray-500"
              />
            </div>

            <div>
              <label className="text-sm block text-gray-700 mb-1">
                Treść wiadomości
              </label>
              <textarea
                placeholder="W czym możemy pomóc?"
                rows={5}
                className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#7b9b6d] placeholder-gray-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#7b9b6d] hover:bg-[#67845a] text-white px-6 py-3 rounded-full shadow-md transition duration-300 w-full"
            >
              Wyślij wiadomość
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
