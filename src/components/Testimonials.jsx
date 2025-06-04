import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials" data-aos="fade-up">
      <h2 className="testimonials-heading">What Clients Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"Paupetsoft built our entire SaaS in under 6 months. Incredible speed and quality."</p>
          <h4>- Alex Carter, Startup CEO</h4>
        </div>
        <div className="testimonial-card">
          <p>"Their custom software helped us double productivity in just 3 weeks."</p>
          <h4>- Megan Scott, Ops Director</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
