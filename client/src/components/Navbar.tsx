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
        {/* Logo */}
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

        {/* Nav – Desktop */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-8 text-sm font-light text-[#2d2d2d] tracking-wide uppercase">
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
          </ul>
        </nav>

        {/* CTA Button – Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center justify-center px-6 py-2 overflow-hidden font-semibold text-xs tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-[#2d2d2d] via-[#3d3d3d] to-[#1a1a1a] rounded-full shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full" />
            <span className="relative z-10">Umów wizytę</span>
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
          <span className="w-6 h-[2px] bg-[#2d2d2d] rounded" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white/90 backdrop-blur-sm text-[#2d2d2d] uppercase text-sm font-light z-50 relative">
          <ul className="flex flex-col gap-4 mt-4">
            <li className="cursor-pointer" onClick={() => scrollTo("about")}>
              O nas
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("services")}>
              Usługi
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("team")}>
              Zespół
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollTo("testimonials")}
            >
              Opinie
            </li>
            <li className="cursor-pointer" onClick={() => scrollTo("contact")}>
              Kontakt
            </li>
            <li>
              <a
                href="https://booksy.com/pl-pl/172889_lampka-beauty_salon-kosmetyczny_15608_poznan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left bg-[#2d2d2d] text-white px-4 py-2 rounded-full hover:bg-[#444] transition text-xs block cursor-pointer"
              >
                Umów wizytę
              </a>
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
