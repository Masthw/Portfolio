import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="c-space pt-7 pb-3 border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        {t("footer.terms")}
        <p>|</p>
        {t("footer.privacy")}
      </div>

      <div className="flex gap-3">
        <div
          className="social-icon cursor-pointer"
          onClick={() => handleRedirect("https://github.com/Masthw")}
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </div>
        <div
          className="social-icon cursor-pointer"
          onClick={() =>
            handleRedirect(
              "https://www.instagram.com/masthc?igsh=cjM3dXZsMXF3YmY4"
            )
          }
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-1/2 h-1/2"
          />
        </div>
        <div
          className="social-icon cursor-pointer"
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/matheus-dos-santos-soares-512bb8214/"
            )
          }
        >
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>

      <p className="text-white-500">
        © {new Date().getFullYear()} Matheus Soares. {t("footer.rights")}
      </p>
    </section>
  );
};

export default Footer;
