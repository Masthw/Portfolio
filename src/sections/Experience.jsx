import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Michelle from "../components/Michelle";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const workExperiences = t("experience.experiences", { returnObjects: true });
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">{t("experience.title")}</h3>
        <div className="work-container">
          <div className="work-canvas custom-bg-black-200 border-black-300">
            <Canvas>
              <ambientLight intensity={6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={2} />
              <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2}/>
              <Suspense fallback={<CanvasLoader />}>
              <Michelle />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
             {workExperiences.map(
                ({ id, name, pos, duration, description }) => (
                  <div key={id} className="work-content-container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content-logo">
                        <img
                          src={
                            id === 1
                              ? "/assets/senai.jpeg"
                              : "/assets/acrilys_logo.jpeg"
                          }
                          alt="logo"
                          className="w-full h-full rounded-2xl"
                        />
                      </div>
                      <div className="work-content-bar"></div>
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} — {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
