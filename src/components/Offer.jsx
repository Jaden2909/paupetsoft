import React from "react";
import "./Offer.css";
import useScrollFadeIn from "./useScrollFadeIn";

const Offer = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.5);

  return (
    <section id="offer" className="offer-section">
      <div className="offer-content" {...fadeIn}>
        <h2>Exclusive Offer for Startups</h2>
        <p>
          If your startup is under 1 year old, Paupetsoft offers you free,
          fully customizable software to help launch and grow your business —
          no strings attached.
        </p>
        <a href="#contact" className="btn-secondary">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Offer;
