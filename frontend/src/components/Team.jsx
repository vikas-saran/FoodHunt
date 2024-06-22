import React from "react";
import  data  from '../restApi.json';
import "../styles/team.css";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          Our team is a passionate blend of culinary experts and dedicated service professionals. United by a love for exceptional food, 
          we strive to create memorable dining experiences. With creativity and care, we bring each dish to life, ensuring every visit is extraordinary. 
          </p>
        </div>
        <div className="team_container">
          {data.data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
