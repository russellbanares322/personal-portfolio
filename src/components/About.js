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
    Aos.init();
  });
  return (
    <Container className="text-center" id="about">
      <h1 className="about_header_text pt-4" data-aos="fade-up">
        ABOUT
      </h1>
      <Row>
        <Col sm={4} data-aos="zoom-in">
          <Image className="about_image" src={bgAbout} fluid />
        </Col>
        <Col sm={8}>
          <h6 className="about_text" data-aos="fade-up">
            Passionate junior front-end web developer, loves to learn new
            skills.
          </h6>
          <h1 className="skills_header_text pt-5" data-aos="fade-up">
            TECH STACK
          </h1>
          <Stack
            className="d-flex justify-content-center"
            direction="horizontal"
            data-aos="zoom-in-up"
            gap={4}
          >
            <div className="react_wrapper">
              <FaReact size={50} className="react_logo" />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ paddingTop: "1rem" }}
              >
                ReactJS
              </p>
            </div>
            <div className="css_wrapper">
              <FaCss3Alt size={50} className="css_logo" />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ paddingTop: "1rem" }}
              >
                CSS
              </p>
            </div>
            <div className="html_wrapper">
              <FaHtml5 size={50} className="html_logo" />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ paddingTop: "1rem" }}
              >
                HTML
              </p>
            </div>
          </Stack>
          <Stack
            className="d-flex justify-content-center mt-4"
            direction="horizontal"
            data-aos="zoom-in-up"
            gap={4}
          >
            <div className="js_wrapper">
              <IoLogoJavascript size={50} className="js_logo" />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ paddingTop: "1rem" }}
              >
                Javascript
              </p>
            </div>
            <div className="firebase_wrapper">
              <SiFirebase size={50} className="firebase_logo" />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ paddingTop: "1rem" }}
              >
                Firebase
              </p>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
