import React from "react";
import "./Clients.css";
import useScrollFadeIn from "../useScrollFadeIn";

const Clients = () => {
  const fadeIn = useScrollFadeIn("up", 1, 0.4);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-content" {...fadeIn}>
        <h2>Our Clients</h2>
        <div className="client-logos">
          <span>Client 1</span>
          <span>Client 2</span>
          <span>Client 3</span>
          <span>Client 4</span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
