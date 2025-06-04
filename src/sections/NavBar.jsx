import { useState } from "react";
import { navLinks } from "../constants/index.js";
import { useTranslation } from 'react-i18next';



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
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

   const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Matheus
          </a>
           <div className="flex items-center gap-3">
            <button
              onClick={() => handleChangeLanguage("pt")}
              className={`hover:text-white ${
                i18n.language === "pt" ? "text-white" : "text-neutral-400"
              }`}
            >
              🇧🇷
            </button>
            <button
              onClick={() => handleChangeLanguage("en")}
              className={`hover:text-white ${
                i18n.language === "en" ? "text-white" : "text-neutral-400"
              }`}
            >
              🇺🇸
            </button>

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
