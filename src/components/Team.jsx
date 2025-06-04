import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <section className="team" data-aos="fade-up">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member" />
          <h4>Jane Doe</h4>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member" />
          <h4>John Smith</h4>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member" />
          <h4>Emily Lee</h4>
          <p>Design Lead</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
