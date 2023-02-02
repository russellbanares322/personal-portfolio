import React, { useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import bgTitle from "../images/bgTitle.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import resume from "../file/Russell_Banares.pdf";

const Title = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container fluid className="title-container">
      <Container>
        <Row lg={2} md={2} sm={1} xs={1} className="me-auto">
          <Col className="title-wrapper">
            <h1 className="p-title" data-aos="fade-right">
              <span>Hi, I am</span>
            </h1>
            <h1 className="p-title1" data-aos="fade-down">
              Russell
            </h1>
            <h1 className="p-text" data-aos="fade-up">
              a showcase of my projects and my abilities.
            </h1>
            <div className="title-icon">
              <RiGithubLine className="title-icon-github" data-aos="slide-up" />
              <RiLinkedinLine
                className="title-icon-linkedin"
                data-aos="slide-up"
              />
              <a href={resume} download>
                <button className="title-icon-resume-btn" data-aos="slide-up">
                  Résumé
                </button>
              </a>
            </div>
          </Col>
          <Col data-aos="fade-up">
            <Image src={bgTitle} className="title-bg" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Title;
