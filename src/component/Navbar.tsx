import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiCode, FiPenTool } from "react-icons/fi";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "HOME", path: "/", icon: <FiHome className="inline mr-2" /> },
    { name: "PROGRAMMING", path: "/programming", icon: <FiCode className="inline mr-2" /> },
    { name: "CREATIVE", path: "/creative", icon: <FiPenTool className="inline mr-2" /> },
  ];

  return (
    <nav
      className={`${
        scrolled
          ? "bg-[var(--color-dark)] shadow-lg text-white"
          : "bg-transparent text-[var(--color-dark)]"
      } fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" onClick={closeMenu}>
            RSGT
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full md:bg-transparent md:static md:flex md:space-x-6 md:w-auto`}
        >
          {links.map(({ name, path, icon }) => (
            <li className="group relative" key={name}>
              <Link
                to={path}
                className={` ${scrolled ? "hover:text-[var(--color-lightpink)]": "hover:text-[var(--color-battlegray)] "} block px-4 py-2 md:p-0 transition-colors duration-300  font-bold`}
                onClick={closeMenu}
              >
                {icon}
                {name}
                <span className={` ${scrolled ? "bg-(--color-lightpink) ": "bg-(--color-battlegray) "} block h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
