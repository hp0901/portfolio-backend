import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [animate, setAnimate] = useState(true);
  const containerRef = useRef(null);

  /* brief pulse on first render */
  useEffect(() => {
    const t = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(t);
  }, []);

  /* auto‑scroll from first to last item, then back */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;                         // nothing to scroll

    el.scrollTo({ left: max, behavior: "smooth" });
    const back = setTimeout(() => {
      el.scrollTo({ left: 0, behavior: "smooth" });
    }, 1200);                                    // delay ≈ scroll time

    return () => clearTimeout(back);
  }, []);

  const navLinkClasses = (path) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-white text-indigo-700"
        : "text-white hover:bg-white/20"
    }`;

  const items = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Vision", path: "/vision" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={containerRef}
      className="w-full overflow-x-auto whitespace-nowrap no-scrollbar px-2"
    >
      <div className="flex gap-2 justify-center min-w-fit">
        {items.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`${navLinkClasses(path)} ${animate ? "animate-pulse" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
