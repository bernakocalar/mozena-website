import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  return (
    <nav className="sticky top-0 z-50  text-white shadow-md ">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          {t("logo")}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium cursor-pointer hover:shadow-2xl">
          {["services", "projects", "blog", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="  transition-colors duration-200">
                {t(item)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Language Switcher & Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-white rounded hover:bg-white hover:text-primary transition"
          >
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>

          <a
            href="#contact"
            className="bg-white text-primary px-4 py-2 rounded hover:bg-secondary hover:text-white transition"
          >
            {t("learnMore")}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              size={28}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {["services", "projects", "blog", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {t(item)}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="bg-white text-primary px-4 py-2 rounded hover:bg-secondary hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {t("learnMore")}
            </a>
          </li>

          <li>
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-primary transition"
            >
              {i18n.language === "tr" ? "EN" : "TR"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
