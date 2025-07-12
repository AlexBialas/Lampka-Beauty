import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 py-4 flex items-center justify-between">
        <div
          onClick={() => scrollTo("hero")}
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

        <nav className="hidden md:flex gap-8 text-sm font-light text-[#2d2d2d] tracking-wide uppercase absolute left-1/2 -translate-x-1/2">
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => scrollTo("about")}
          >
            O nas
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => scrollTo("services")}
          >
            Usługi
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => scrollTo("team")}
          >
            Zespół
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => scrollTo("testimonials")}
          >
            Opinie
          </li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={() => scrollTo("contact")}
          >
            Kontakt
          </li>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("cta")}
            className="relative group inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-xs tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
            <span className="relative z-10">Umów wizytę</span>
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/90 backdrop-blur-sm text-[#2d2d2d] uppercase text-sm font-light">
          <ul className="flex flex-col gap-4 mt-4">
            <li onClick={() => scrollTo("about")}>O nas</li>
            <li onClick={() => scrollTo("services")}>Usługi</li>
            <li onClick={() => scrollTo("team")}>Zespół</li>
            <li onClick={() => scrollTo("testimonials")}>Opinie</li>
            <li onClick={() => scrollTo("contact")}>Kontakt</li>
            <li>
              <button
                onClick={() => scrollTo("cta")}
                className="w-full text-left bg-[#2d2d2d] text-white px-4 py-2 rounded-full hover:bg-[#444] transition text-xs"
              >
                Umów wizytę
              </button>
            </li>
            <li>
              <button className="text-left mt-2">🌐 Zmień język</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
