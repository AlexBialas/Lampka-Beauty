import { motion } from "framer-motion";

const CallbackRequestSection = () => {
  return (
    <section className="bg-[#404843] py-20 px-4 h-screen flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 shadow-xl rounded-3xl overflow-hidden bg-white p-6 md:p-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e] mb-6">
            Zamów rozmowę
          </h2>
          <p className="text-gray-600 mb-8">
            Zostaw swoje dane, a nasz zespół skontaktuje się z Tobą, aby dobrać
            idealną usługę.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Imię i nazwisko
              </label>
              <input
                type="text"
                placeholder="Wpisz swoje imię"
                className="w-full px-4 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#b9c7af] text-[#1e1e1e] placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Numer telefonu
              </label>
              <input
                type="tel"
                placeholder="+48 600 000 000"
                className="w-full px-4 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#b9c7af] text-[#1e1e1e] placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="np. anna@email.com"
                className="w-full px-4 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#b9c7af] text-[#1e1e1e] placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferowana forma kontaktu
              </label>
              <select className="w-full px-4 py-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-[#b9c7af] text-[#1e1e1e]">
                <option className="text-black" value="phone">
                  Telefonicznie
                </option>
                <option className="text-black" value="email">
                  E-mail
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#b9c7af] hover:bg-[#67845a] text-white px-6 py-3 rounded-full shadow-md transition duration-300"
            >
              Wyślij zgłoszenie
            </button>
          </form>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/request-callback.jpg"
            alt="Recepcja Lampka Beauty"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallbackRequestSection;
