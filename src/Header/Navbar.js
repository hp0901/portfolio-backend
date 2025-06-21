import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinkClasses = (path) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
      location.pathname === path
        ? "bg-blue-100 text-blue-600 shadow-sm"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
    }`;

  return (
<nav className="w-full py-4 px-6 flex justify-center items-center text-lg font-semibold text-white">    
    <div className="flex space-x-4">
        <Link to="/" className={navLinkClasses("/")}>
          Home
        </Link>
        <Link to="/about" className={navLinkClasses("/about")}>
          About
        </Link>
        <Link to="/Services" className={navLinkClasses("/Services")}>
          Services
        </Link>
        <Link to="/Vision" className={navLinkClasses("/Vision")}>
          Vision
        </Link>
        <Link to="/contact" className={navLinkClasses("/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
