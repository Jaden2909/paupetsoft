import React from "react";
import "./Hero.css";
import useScrollFadeIn from "./useScrollFadeIn";

const Hero = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.1);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content" {...fadeIn}>
        <h1>Custom Software Development<br />For Your Vision</h1>
        <p>
          We build glossy, scalable, and highly customizable software solutions
          tailored to your business needs. And if you’re a startup under 1 year old,
          you might qualify for our free software program.
        </p>
        <a href="#contact" className="btn-primary">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
