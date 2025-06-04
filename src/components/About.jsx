import React from "react";
import "./About.css";
import useScrollFadeIn from "./useScrollFadeIn";

const About = () => {
  const fadeInTop = useScrollFadeIn("up", 1, 0);
  const fadeInDelay1 = useScrollFadeIn("up", 1, 0.2);
  const fadeInDelay2 = useScrollFadeIn("up", 1, 0.4);
  const fadeInDelay3 = useScrollFadeIn("up", 1, 0.6);

  return (
    <section id="about" className="about-section">
      <div className="about-content" {...fadeInTop}>
        <h2>About Paupetsoft</h2>
        <p>
          Paupetsoft is a visionary software company focused on delivering
          scalable, elegant, and intelligent solutions that empower businesses
          to thrive in the digital era.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-box" {...fadeInDelay1}>
          <h3>🚀 Our Mission</h3>
          <p>
            We help businesses launch fast, stable software with user-centric
            design and seamless performance across all devices.
          </p>
        </div>

        <div className="about-box" {...fadeInDelay2}>
          <h3>🛠️ Expertise</h3>
          <p>
            From enterprise-level systems to elegant web platforms, our team
            blends modern tech with precise craftsmanship.
          </p>
        </div>

        <div className="about-box" {...fadeInDelay3}>
          <h3>🌍 Global Impact</h3>
          <p>
            Serving clients across continents, Paupetsoft builds meaningful
            digital experiences that scale and adapt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
