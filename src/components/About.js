import React, { useEffect } from "react";
import { Container, Image, Col, Row, Stack } from "react-bootstrap";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import bgAbout from "../images/bgAbout.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container className="text-center" id="about">
      <h1 className="about_header_text pt-4" data-aos="fade-up">
        ABOUT
      </h1>
      <Row>
        <Col sm={6} data-aos="zoom-in">
          <Image className="about_image" src={bgAbout} fluid />
        </Col>
        <Col sm={6}>
          <h6
            className="about_text"
            style={{
              fontWeight: "300",
              fontSize: "1.3rem",
            }}
            data-aos="fade-up"
          >
            Passionate junior front-end web developer, loves to learn new
            skills.
          </h6>
          <h1 className="skills_header_text pt-5" data-aos="fade-up">
            My skills:
          </h1>
          <Stack
            className="d-flex justify-content-center"
            direction="horizontal"
            data-aos="zoom-in-up"
            gap={3}
          >
            <div>
              <FaReact size={70} className="react_logo" />
            </div>
            <div>
              <FaCss3Alt size={70} className="css_logo" />
            </div>
            <div>
              <FaHtml5 size={70} className="html_logo" />
            </div>
            <div>
              <IoLogoJavascript size={70} className="js_logo" />
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
