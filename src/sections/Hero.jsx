import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-full">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full object-cover opacity-50"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-center md:text-start">
              <h1 className="flex flex-col gap-2">
                <span className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2">
                  <span>Shaping</span>
                  <span className="slide relative inline-block">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center justify-center md:justify-start md:gap-3 gap-2 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={`${word.text} icon`}
                            className="xl:size-12 md:size-10 size-10 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span className="text-brand-orange">{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <span className="block">into Real&nbsp;Products</span>
                <span className="block">that Deliver&nbsp;Results</span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-lg">
              CodeDuo Studio builds world-class web products, SaaS platforms,
              and growth-focused digital marketing strategies for businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <a
                href="#work"
                className="cta-primary"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="cta-secondary"
              >
                Start a Project →
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience scale={0.75} position={[0, -3, 0]} />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
