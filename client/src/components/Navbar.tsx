import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("pl");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow-md" : "bg-white/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() =>
            isHomePage ? scrollTo("hero") : (window.location.href = "/")
          }
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Lampka Beauty Logo"
            className="h-10 w-10 rounded-full object-cover border border-gray-300"
          />
          <span className="text-lg font-light uppercase tracking-widest text-[#2d2d2d]">
            Lampka Beauty
          </span>
        </div>

        {/* Nav – Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8 text-sm font-light text-[#2d2d2d] tracking-wide uppercase">
            {isHomePage ? (
              <>
                <li
                  onClick={() => scrollTo("about")}
                  className="cursor-pointer hover:text-gray-500"
                >
                  O nas
                </li>
                <li
                  onClick={() => scrollTo("services")}
                  className="cursor-pointer hover:text-gray-500"
                >
                  Usługi
                </li>
                <li
                  onClick={() => scrollTo("team")}
                  className="cursor-pointer hover:text-gray-500"
                >
                  Zespół
                </li>
                <li
                  onClick={() => scrollTo("testimonials")}
                  className="cursor-pointer hover:text-gray-500"
                >
                  Opinie
                </li>
              </>
            ) : null}
            <li>
              <Link to="/contact" className="hover:text-gray-500">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA + Language – Desktop */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <a
            href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-xs tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
            <span className="relative z-10">Umów wizytę</span>
          </a>

          <button
            onClick={() => setLanguage((prev) => (prev === "pl" ? "en" : "pl"))}
            className="text-sm flex items-center gap-1 text-[#2d2d2d] hover:text-gray-600 transition ml-2"
          >
            <FaGlobe className="text-[#2d2d2d]" />
            {language === "pl" ? "EN" : "PL"}
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center px-6 pb-6 pt-4 bg-white/95 backdrop-blur-sm text-[#2d2d2d] uppercase text-sm font-light z-50 relative">
          <ul className="flex flex-col gap-5 items-center w-full">
            {isHomePage && (
              <>
                <li
                  onClick={() => scrollTo("about")}
                  className="cursor-pointer hover:opacity-70 transition"
                >
                  O nas
                </li>
                <li
                  onClick={() => scrollTo("services")}
                  className="cursor-pointer hover:opacity-70 transition"
                >
                  Usługi
                </li>
                <li
                  onClick={() => scrollTo("team")}
                  className="cursor-pointer hover:opacity-70 transition"
                >
                  Zespół
                </li>
                <li
                  onClick={() => scrollTo("testimonials")}
                  className="cursor-pointer hover:opacity-70 transition"
                >
                  Opinie
                </li>
              </>
            )}
            <li>
              <Link to="/contact" className="hover:opacity-70 transition">
                Kontakt
              </Link>
            </li>

            <li className="w-full text-center">
              <a
                href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-[#a8b28c] via-[#e6cbd1] to-[#d6b3ba] text-white rounded-full font-semibold text-xs tracking-widest shadow-md hover:scale-105 hover:shadow-lg transition"
              >
                Umów wizytę
              </a>
            </li>

            <li>
              <button
                onClick={() =>
                  setLanguage((prev) => (prev === "pl" ? "en" : "pl"))
                }
                className="text-sm mt-2 flex items-center gap-1 hover:text-gray-600 transition"
              >
                <FaGlobe className="text-[#2d2d2d]" />
                {language === "pl" ? "EN" : "PL"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
