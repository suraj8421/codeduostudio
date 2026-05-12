import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const vyapariRef = useRef(null);
  const reviewRef = useRef(null);
  const clinicRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [vyapariRef.current, reviewRef.current, clinicRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="work-section">
      {/* Section Header */}
      <div className="work-header">
        <p className="section-tag" style={{ display: "inline-block" }}>Our Portfolio</p>
        <h2 className="work-title">Products &amp; Projects</h2>
        <p className="work-subtitle">
          We build real products that solve real problems — and take on
          lead magnet projects that grow our ecosystem.
        </p>
      </div>

      <div className="work-cards-grid">
        {/* ── VyapariSetu ──────────────────────────── */}
        <div ref={vyapariRef} className="work-card work-card--featured">
          {/* Badge */}
          <span className="work-badge work-badge--product">
            🏢 Company Product
          </span>

          <div className="work-card__inner">
            {/* Left: text */}
            <div className="work-card__text">
              <div className="work-card__logo-row">
                <div className="work-card__icon-wrap">
                  <span className="work-card__icon">📦</span>
                </div>
                <div>
                  <h3 className="work-card__name">VyapariSetu</h3>
                  <p className="work-card__category">
                    Inventory &amp; Ledger Management SaaS
                  </p>
                </div>
              </div>

              <p className="work-card__desc">
                VyapariSetu is our flagship SaaS product built for Indian
                retail businesses. It automates inventory tracking, sales
                ledger management, and invoice generation — helping shop
                owners run their business digitally with zero hassle.
              </p>

              <ul className="work-card__features">
                <li>✓ Smart Inventory Management</li>
                <li>✓ Digital Khata (Ledger) System</li>
                <li>✓ Invoice Generation &amp; Tracking</li>
                <li>✓ Subscription-based SaaS Model</li>
              </ul>

              <div className="work-card__tags">
                {["React", "Node.js", "MongoDB", "SaaS", "B2B"].map((t) => (
                  <span key={t} className="work-tag-pill">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://vyaparisetu.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-card__cta"
              >
                Visit VyapariSetu →
              </a>
            </div>

            {/* Right: screenshot placeholder */}
            <div className="work-card__preview work-card__preview--orange">
              <div className="work-card__preview-inner">
                <div className="work-card__preview-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="work-card__preview-content">
                  <div className="preview-row preview-row--wide" />
                  <div className="preview-row preview-row--medium" />
                  <div className="preview-row preview-row--narrow" />
                  <div className="preview-grid">
                    <div className="preview-card" />
                    <div className="preview-card" />
                    <div className="preview-card" />
                  </div>
                  <div className="preview-table">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="preview-table-row" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ReviewBazz ───────────────────────────── */}
        <div ref={reviewRef} className="work-card work-card--side">
          <span className="work-badge work-badge--product">
            🏢 Company Product
          </span>

          <div className="work-card__icon-wrap work-card__icon-wrap--blue">
            <span className="work-card__icon">⭐</span>
          </div>
          <h3 className="work-card__name">ReviewBazz</h3>
          <p className="work-card__category">Review &amp; Reputation Platform</p>

          <p className="work-card__desc">
            ReviewBazz is a specialized project designed to help businesses amplify their online presence. It enables clients to collect and showcase authentic customer reviews, building the social proof necessary to skyrocket conversion rates.
          </p>

          <div className="work-card__tags work-card__tags--mt">
            {["Reviews", "Social Proof", "Growth", "Marketing"].map((t) => (
              <span key={t} className="work-tag-pill work-tag-pill--blue">
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://reviewbazz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card__cta"
          >
            Explore ReviewBazz →
          </a>
        </div>

        {/* ── Kulkarni's Clinic ─────────────────────── */}
        <div ref={clinicRef} className="work-card work-card--side work-card--side-green">
          <span className="work-badge work-badge--project">
            🏥 Client Project
          </span>

          <div className="work-card__icon-wrap work-card__icon-wrap--green">
            <span className="work-card__icon">🩺</span>
          </div>
          <h3 className="work-card__name">Kulkarni's Clinic</h3>
          <p className="work-card__category">Healthcare & Appointment Booking</p>

          <p className="work-card__desc">
            A modern healthcare platform for Kulkarni's Clinic, enabling patients to book appointments, view services, and manage health records online with ease.
          </p>

          <div className="work-card__tags work-card__tags--mt">
            {["Next.js", "Healthcare", "Booking", "PostgreSQL"].map((t) => (
              <span key={t} className="work-tag-pill work-tag-pill--green">
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://kulkaarnisclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="work-card__cta work-card__cta--green"
          >
            Visit Clinic →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;