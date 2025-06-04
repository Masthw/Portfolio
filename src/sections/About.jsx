import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("matheussoaressdev@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <p className="head-text text-gray-gradient">{t("about.title")}</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/me3.png"
              alt="grid-1"
              className="w-full h-auto object-contain"
            />
            <div>
              <p className="grid-headtext">{t("about.greeting")}</p>
              <p className="grid-subtext">{t("about.description")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{t("about.techstack_title")}</p>
              <p className="grid-subtext">{t("about.techstack_description")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl={"/assets/earth-night.jpg"}
                bumpImageUrl={"/assets/earth-topology.png"}
              />
            </div>
            <div>
              <p className="grid-headtext">{t("about.remote_title")}</p>
              <p className="grid-subtext">{t("about.remote_description")}</p>
              <a href="#contact">
                <Button
                  name={t("about.contact")}
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{t("about.passion_title")}</p>
              <p className="grid-subtext">{t("about.passion_description")}</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">{t("about.contact")}</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-1xl md:text-xl font-medium text-gray-gradient text-white">
                  {t("about.email")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
