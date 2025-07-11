// src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#9d9d9c]">
          Lampka Beauty
        </Link>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-[#9d9d9c]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#9d9d9c]">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#9d9d9c]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#9d9d9c]">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-[#9d9d9c]">
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
