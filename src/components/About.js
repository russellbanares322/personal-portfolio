import React, { useEffect } from "react";
import { Container, Image, Row } from "react-bootstrap";
import bgAbout from "../assets/images/bgAbout.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { techStacks } from "../data/ProjectsData";

function About() {
  //Animate on Scroll
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="about_container" name="about">
      <svg
        className="about_wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EDF5E1"
          fill-opacity="1"
          d="M0,256L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
      <Container className="about_details">
        <p className="about_header_text pt-4" data-aos="fade-up">
          ABOUT
        </p>
        <Row sm={1} md={1} lg={2} xl={2}>
          <div data-aos="fade-up">
            <Image className="about_image" src={bgAbout} fluid />
          </div>
          <div>
            <h6 className="about_text" data-aos="fade-up">
              Passionate junior front-end web developer, loves to learn new
              skills.
            </h6>
            <p className="skills_header_text pt-5" data-aos="fade-up">
              TECHNOLOGIES
            </p>
            <div className="stack_wrapper">
              {techStacks.map((stack) => (
                <div
                  className="stack_card"
                  data-aos="slide-down"
                  key={stack.id}
                >
                  <p className="stack_icon">{stack.icon}</p>
                  <p className="stack_name">{stack.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default About;
