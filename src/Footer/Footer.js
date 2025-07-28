import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";


const Footer = () => {
  const sections = {
    Company: ["About", "Careers", "Affiliates"],
    Resources: ["Articles", "Blog", "Chart Sheet", "Code challenges", "Docs", "Projects", "Videos", "Workspaces"],
    Plans: ["Paid memberships", "For students", "Business solutions"],
    Community: ["Forums", "Chapters", "Events"],
    Legal: ["Privacy Policy", "Cookie Policy", "Terms"],
  };

 const socialMediaLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19F3cN2KVj/",
    icon: <FaFacebookF className="text-blue-600 hover:text-blue-400" />,
  },
  {
  label: "Gmail",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=hp9857018@gmail.com&su=Greetings&body=Hii%20Harsh%20Patel",
  icon: <FaEnvelope className="text-red-500 hover:text-red-300" />,
},
  {
    label: "X",
    href: "https://x.com/HarshPatel7292",  // Updated Twitter URL for X
    icon: <FaTwitter className="text-sky-400 hover:text-sky-300" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Harsh_creation09",
    icon: <FaYoutube className="text-red-600 hover:text-red-400" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/h_p_0901?igsh=MWs1dXU2MHJyamJ0MA==",
    icon: <FaInstagram className="text-pink-500 hover:text-pink-300" />,
  },
  {
  label: "WhatsApp",
  href: "https://wa.me/919687788992?text=Hii%20Harsh%20Patel",  // Replace with your number
  icon: <FaWhatsapp className="text-green-500 hover:text-green-400" />,
},
];


  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      
        {/* Header Row: Logo + Newsletter */}
        <div className="flex flex-col items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-2xl font-bold text-cyan-400 transition-all  cursor-pointer">
            <FaRocket className="text-3xl" />
            <span className="text-white">Harsh Dev</span>
          </div>

          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Subscribe to Contact"
              className="px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
              required
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
          {Object.entries(sections).map(([sectionTitle, links]) => (
            <div key={sectionTitle}>
              <h2 className="font-semibold mb-3 text-cyan-400">{sectionTitle}</h2>
              <ul className="space-y-2">
                {links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-wrap justify-center items-center gap-5">
          {socialMediaLinks.map(({ label, href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="text-2xl transition-transform transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-xs text-gray-400 text-center">
          Made with ❤️ by <span className="text-cyan-400">Harsh Patel</span> • © 2025. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
