import React, { useEffect } from "react";
import { Container, Image, Col, Row, Stack } from "react-bootstrap";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import bgAbout from "../images/bgAbout.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  //Animate on Scroll
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
          <h6 className="about_text" data-aos="fade-up">
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
            gap={2}
          >
            <div>
              <FaReact size={50} className="react_logo" />
            </div>
            <div>
              <FaCss3Alt size={50} className="css_logo" />
            </div>
            <div>
              <FaHtml5 size={50} className="html_logo" />
            </div>
            <div>
              <IoLogoJavascript size={50} className="js_logo" />
            </div>
            <div>
              <SiFirebase size={50} className="firebase_logo" />
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
