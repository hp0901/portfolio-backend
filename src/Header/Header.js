import { useState, useRef, useEffect } from "react";
import {
  FaCogs,
  FaInfoCircle,
  FaAddressBook,
  FaIdBadge,
} from "react-icons/fa";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ServicesPage from './PersonalInfo';
import SettingsPage from './SettingsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { Link } from "react-router-dom";
import hplogo from '../assets/hplogoupdated.jpeg'; // Adjust the path as necessary
import { MdMoreVert } from 'react-icons/md';
import Navbar from './Navbar';


export const profileMenuItems = [
  { label: "Services", icon: <FaIdBadge />, path: "/services", element: <ServicesPage /> },
  { label: "Settings", icon: <FaCogs />, path: "/settings", element: <SettingsPage /> },
  { label: "About Us", icon: <FaInfoCircle />, path: "/about", element: <AboutPage /> },
  { label: "Contact Us", icon: <FaAddressBook />, path: "/contact", element: <ContactPage /> },
];

export default function Header() {
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Shared styles for glowing bg
  const glowingBgClass = "absolute inset-0 rounded-full bg-indigo-500/40 blur-xl animate-pulse";

  return (
    <header className="relative z-50 text-white bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg shadow-purple-900/50">
      <div className="flex items-center justify-between px-4 py-4 bg-purple-900 bg-opacity-80 backdrop-blur-md relative">
        
        {/* Left - Menu */}
        
        <div ref={profileRef} className="z-50 relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="relative z-10 text-3xl rounded-full p-1 text-white hover:text-indigo-300 transition-colors duration-300"
            aria-label="Profile"
          >
            {/* Glowing background circle */}
            {profileOpen && <span className={glowingBgClass} />}
            <span class="material-symbols-outlined">
              <MdMoreVert />
              </span>
          </button>
          {profileOpen && (
            <div className="absolute left-4 mt-2 w-56 bg-blue-900/90 backdrop-blur-md text-white rounded-lg shadow-lg z-50 p-2">
              {profileMenuItems.map(({ label, icon, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className=" flex items-center gap-3 px-4 py-2 hover:bg-white/20 rounded-md transition-colors duration-150 relative z-20"
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Center - Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-3xl font-bold drop-shadow-md whitespace-nowrap">
         <Navbar/>
        </h1>

        {/* Right - Profile */}
        <div ref={menuRef} className="z-50 relative">
          <img
            src={hplogo}
            alt="Logo"
            className="h-16 w-16 rounded-full mr-2"
          />

        </div>
      </div>
    </header>
  );
}
