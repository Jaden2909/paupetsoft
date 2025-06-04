import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features" data-aos="fade-up">
      <h2 className="features-heading">Key Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Scalable Architecture</h3>
          <p>Our software grows with your business.</p>
        </div>
        <div className="feature-item">
          <h3>Enterprise Security</h3>
          <p>Industry-standard encryption and data protection.</p>
        </div>
        <div className="feature-item">
          <h3>Real-time Analytics</h3>
          <p>Make data-driven decisions instantly.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;