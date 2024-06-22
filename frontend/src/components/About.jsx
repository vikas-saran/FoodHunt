import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to FOODHUNT, where culinary excellence meets exceptional service. Nestled in the heart of Jodhpur(RAJ.),
             our restaurant is a haven for food enthusiasts seeking a memorable dining experience. 
             Founded in 2020, we believe in the power of food to bring people together. Our journey began with a passion for creating dishes that not only satisfy the palate but also tell a story.
                    </p>
              <NavLink to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </NavLink>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
