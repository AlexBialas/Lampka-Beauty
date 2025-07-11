// src/components/Footer.tsx
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & dane */}
        <div className="space-y-4">
          <img
            src="/assets/logo-white.png"
            alt="Lampka Beauty Logo"
            className="w-36"
          />
          <p className="text-sm">Lampka Beauty – Esthetic Studio</p>
          <p className="text-sm">Email: kontakt@lampkabeauty.pl</p>
          <p className="text-sm">Tel: +48 600 000 000</p>
        </div>

        {/* Linki nawigacyjne */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Explore</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/booking" className="hover:underline">
                Booking
              </a>
            </li>
          </ul>
        </div>

        {/* Social media + mapka */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Follow us</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Instagram" rel="noopener">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" rel="noopener">
              <FaFacebook />
            </a>
            <a href="#" aria-label="TikTok" rel="noopener">
              <FaTiktok />
            </a>
            <a href="#" aria-label="WhatsApp" rel="noopener">
              <FaWhatsapp />
            </a>
          </div>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5452491862523!2d16.93016831579621!3d52.40637417979268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470445eecd7b0841%3A0x86d2a6ecf41f898e!2sPozna%C5%84!5e0!3m2!1spl!2spl!4v1621773456712!5m2!1spl!2spl"
            width="100%"
            height="120"
            className="rounded-md border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Dolna linia */}
      <div className="mt-10 border-t border-white/30 pt-4 text-sm text-center">
        © {new Date().getFullYear()} Lampka Beauty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
