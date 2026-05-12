import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services, abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.12,
        scrollTrigger: { trigger: "#services", start: "top 72%" },
      }
    );

    gsap.fromTo(
      ".ability-card",
      { scale: 0.94, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.75, ease: "power2.out", stagger: 0.1,
        scrollTrigger: { trigger: ".abilities-grid", start: "top 80%" },
      }
    );
  }, []);

  return (
    <section id="services" className="flex-center section-padding" ref={sectionRef}>
      <div className="w-full h-full md:px-10 px-5">

        {/* Header */}
        <TitleHeader title="Our Core Services" sub="🚀 What We Offer" />

        {/* Services grid */}
        <div className="services-grid mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card card-border rounded-2xl p-7 flex flex-col gap-5 group"
            >
              <div className="service-icon-wrap">
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white-50 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
              <div className="service-accent-line" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Why us */}
        <div className="mt-24">
          <TitleHeader title="Why Choose CodeDuo Studio?" sub="💼 Our Promise to You" />
          <div className="abilities-grid mt-12">
            {abilities.map(({ imgPath, title, desc }, index) => (
              <div key={index} className="ability-card card-border rounded-xl p-7 flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black-200 border border-black-50 flex-shrink-0">
                  <img src={imgPath} alt={title} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-white text-lg font-semibold">{title}</h3>
                <p className="text-white-50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#1a110a] to-[#0e0e10] p-8 md:p-12 text-center">
          <p className="section-tag mx-auto" style={{ width: "fit-content" }}>
            Let's Talk
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4">
            Ready to Build Something Great?
          </h3>
          <p className="text-white-50 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Whether you need a powerful website, a smart SaaS platform, or a
            high-converting marketing strategy — we're here to make it happen.
          </p>
          <a href="#contact" className="cta-primary" style={{ margin: "0 auto" }}>
            Get a Free Consultation →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
