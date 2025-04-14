import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiCode, FiPenTool } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { scrollToHash } from "../utils/scrollToHash";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    {
      name: "HOME ⌵",
      dropdown: true,
      path: "/",
      icon: <FiHome className="inline mr-2" />,
      items: [
        { name: "ABOUT ME", path: "/", href: "#about" },
        { name: "ACHIEVEMENTS", path: "/", href: "#achievements" },
      ],
    },
    { name: "PROGRAMMING", path: "/programming", icon: <FiCode className="inline mr-2" /> },
    { name: "CREATIVE", path: "/creative", icon: <FiPenTool className="inline mr-2" /> },
    { name: "CERTIFICATES", path: "/certificate-credentials", icon: <PiCertificateBold className="inline mr-2" /> },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (href: string) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToHash(href), 50); // delay for DOM update
    } else {
      scrollToHash(href);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={`${
        scrolled
          ? "bg-[var(--color-dark)] shadow-lg text-white"
          : "bg-transparent text-(--color-dark)"
      } fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold" onClick={closeMenu}>
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
          className={`absolute top-full left-0 w-full bg-white text-(--color-dark) md:text-inherit transform transition-all duration-300 ease-in-out md:transform-none md:opacity-100 md:translate-y-0 md:pointer-events-auto md:bg-transparent md:static md:flex md:space-x-6 md:w-auto ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {links.map(({ name, path, icon, dropdown, items }) => (
            <li className="group relative" key={name}>
              {dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(name)}
                    className={`block px-4 py-2 md:p-0 font-semibold transition-colors duration-300 relative z-10 ${
                      scrolled
                        ? "hover:text-[var(--color-lightpink)]"
                        : "hover:text-[var(--color-battlegray)]"
                    }`}
                  >
                    {icon}
                    {name}
                    <span
                      className={`block h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                        scrolled
                          ? "bg-(--color-lightpink)"
                          : "bg-(--color-battlegray)"
                      }`}
                    ></span>
                  </button>

                  <ul className="md:hidden">
                  {items?.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          handleSectionClick(item.href);
                          setActiveDropdown(null);
                        }}
                        className="ml-10 block w-full text-left px-4 py-2 transition-all duration-300 hover:bg-(--color-lightpink) hover:text-(--color-gray)"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                <ul
                  className={`hidden md:block absolute top-full left-0 bg-white text-(--color-dark) shadow-lg md:min-w-[160px] rounded-md mt-5 z-50 transition-all duration-300 ease-out ${
                    activeDropdown === name
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                  }`}
                  >
                    {items?.map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            handleSectionClick(item.href);
                            setActiveDropdown(null); 
                          }}
                          className="block w-full text-left px-4 py-2 transition-all duration-300 hover:bg-(--color-lightpink) hover:text-(--color-gray)"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : path ? (
                <Link
                  to={path}
                  onClick={closeMenu}
                  className={`block px-4 py-2 md:p-0 font-semibold transition-colors duration-300 relative z-10 ${
                    scrolled
                      ? "hover:text-[var(--color-lightpink)]"
                      : "hover:text-[var(--color-battlegray)]"
                  }`}
                >
                  {icon}
                  {name}
                  <span
                    className={`block h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                      scrolled
                        ? "bg-(--color-lightpink)"
                        : "bg-(--color-battlegray)"
                    }`}
                  ></span>
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
