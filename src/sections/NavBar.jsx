import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { useTranslation } from "react-i18next";

const NavItems = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li cursor-pointer">
          <a
            href={href}
            className="nav-li-a w-full h-full block"
            onClick={onClick}
          >
            {t(`nav.${name}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleToggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex items-center gap-4">
            <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Matheus
          </a>
            <div
              onClick={handleToggleLanguage}
              className="w-14 h-7 flex items-center rounded-full p-1 cursor-pointer bg-neutral-700
                 transition-colors duration-300"
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform
                ${
                  i18n.language === "pt" ? "translate-x-0" : "translate-x-7"
                } transition-transform duration-300 flex items-center justify-center text-[10px] font-bold`}
              >
                {i18n.language === "pt" ? "PT" : "EN"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
          </div>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
