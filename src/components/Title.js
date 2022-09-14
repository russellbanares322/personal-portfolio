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
        <Col sm={12}>
          <Row>
            <Col className="mt-1" sm={6}>
              <h1 className="p_title" data-aos="fade-right">
                <span style={{ fontSize: "3rem", fontWeight: "600" }}>
                  Hi, I' am
                </span>
              </h1>
              <h1 className="p_title1" data-aos="fade-right">
                Russell
              </h1>
              <h1 className="p_text" data-aos="fade-up">
                a showcase of my projects and my abilities.
              </h1>
            </Col>
            <Col sm={6} data-aos="fade-up">
              <Image src={bgTitle} className="bg_title" />
            </Col>
          </Row>
        </Col>
      </Container>
    </Container>
  );
};

export default Title;
