import React from "react";
import "./Services.css";
import useScrollFadeIn from "./useScrollFadeIn";

const Services = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.2);

  return (
    <section id="services" className="services-section">
      <div className="services-inner" {...fadeIn}>
        <h2 className="services-heading">Our Expertise</h2>
        <p className="services-subheading">
          Scalable, vision-driven, and tailored to your needs.
        </p>

        <div className="services-list">
          <div className="service-row">
            <div className="service-name">🧠 Custom ERP Development</div>
            <div className="service-desc">
              Streamline operations with intelligent, tailored ERP systems.
            </div>
          </div>
          <div className="line-divider"></div>

          <div className="service-row">
            <div className="service-name">📱 Web & Mobile Apps</div>
            <div className="service-desc">
              Fully responsive and engaging apps to elevate user experience.
            </div>
          </div>
          <div className="line-divider"></div>

          <div className="service-row">
            <div className="service-name">☁️ Cloud Solutions</div>
            <div className="service-desc">
              Agile, secure, and scalable infrastructure on the cloud.
            </div>
          </div>
          <div className="line-divider"></div>

          <div className="service-row">
            <div className="service-name">🚀 Startup Incubation</div>
            <div className="service-desc">
              Technical mentoring, MVP builds, and go-to-market strategy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
