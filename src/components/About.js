import React, { useEffect } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import bgAbout from "../images/bgAbout.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { techStacks } from "../data/ProjectsData";

function About() {
  //Animate on Scroll
  useEffect(() => {
    Aos.init();
  });
  return (
    <Container className="text-center" name="about">
      <p className="about_header_text pt-4" data-aos="fade-up">
        ABOUT
      </p>
      <Row>
        <Col sm={4} data-aos="zoom-in">
          <Image className="about_image" src={bgAbout} fluid />
        </Col>
        <Col sm={8}>
          <h6 className="about_text" data-aos="fade-up">
            Passionate junior front-end web developer, loves to learn new
            skills.
          </h6>
          <p className="skills_header_text pt-5" data-aos="fade-up">
            SKILLS
          </p>
          <div className="stack_wrapper">
            {techStacks.map((stack) => (
              <div className="stack_card" data-aos="slide-down" key={stack.id}>
                <p className="stack_icon">{stack.icon}</p>
                <p className="stack_name">{stack.name}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
