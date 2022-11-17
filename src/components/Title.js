import React, { useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import bgTitle from "../images/bgTitle.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Title = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container fluid className="title">
      <Container>
        <Row lg={2} md={2} sm={1} xs={1} className="me-auto">
          <Col className="mt-5">
            <h1 className="p_title" data-aos="fade-right">
              <span>Hi, I am</span>
            </h1>
            <h1 className="p_title1" data-aos="fade-down">
              Russell
            </h1>
            <h1 className="p_text" data-aos="fade-up">
              a showcase of my projects and my abilities.
            </h1>
          </Col>
          <Col data-aos="fade-up" className="mt-3">
            <Image src={bgTitle} className="bg_title" fluid />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Title;
