import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import booksyIcon from "/assets/booksy.png";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#1e1e1e] text-white pt-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="h-1 w-full bg-gradient-to-r from-[#7b9b6d] via-[#d4d4d4] to-[#7b9b6d]" />

      <div className="px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 text-center md:text-left">
            <img
              src="/assets/lampka-logo.png"
              alt="Lampka Beauty Logo"
              className="w-36 rounded-full mb-4 cursor-pointer mx-auto hover:scale-105 transition duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <p className="text-sm text-white/80">
              Lampka Beauty – salon kosmetyczny w sercu Poznania, gdzie luksus i
              relaks łączą się z profesjonalizmem.
            </p>
            <div className="text-sm text-white/60 space-y-1">
              <p>Email: kontakt@lampkabeauty.pl</p>
              <p>Telefon: +48 600 000 000</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-4 uppercase text-[#b9c7af]">
              Nawigacja
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  O nas
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Usługi
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/booking" className="hover:text-white">
                  Rezerwacja
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-4 uppercase text-[#b9c7af]">
              Godziny otwarcia
            </h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li className="flex justify-between">
                <span className="font-semibold text-white">Poniedziałek</span>
                <span className="font-semibold text-white">10:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Wtorek</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Środa</span>
                <span>12:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Czwartek</span>
                <span>09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Piątek</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota</span>
                <span>09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela</span>
                <span className="text-white/60 italic">Zamknięte</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-wide mb-4 uppercase text-[#b9c7af]">
              Znajdź nas
            </h4>
            <div className="flex flex-wrap gap-4 mb-6 text-2xl text-white/80">
              <a
                href="https://www.instagram.com/lampkabeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b9c7af] transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/lampkabeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b9c7af] transition-transform transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@lampka.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b9c7af] transition-transform transform hover:scale-110"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/48600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b9c7af] transition-transform transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-[#7b9b6d] transition-transform transform hover:scale-105"
              >
                <img
                  src={booksyIcon}
                  alt="Booksy"
                  className="h-7 w-7 rounded-full"
                />
              </a>
            </div>

            <div className="rounded overflow-hidden shadow-md border border-white/10">
              <iframe
                title="Lokalizacja Lampka Beauty"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5850300895695!2d16.93789759323517!3d52.432316270627794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045be1601a30bb%3A0xac312e08b27fb6fb!2sLampka%20Beauty!5e0!3m2!1spl!2spl!4v1752476629290!5m2!1spl!2spl"
                width="100%"
                height="150"
                className="w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Lampka Beauty. Wszelkie prawa
          zastrzeżone.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
