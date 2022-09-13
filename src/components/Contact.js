import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri";
import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  //Email JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zddbkwp",
        "template_5fhuknd",
        form.current,
        "gdw0V_Gi6oPUFqnMU"
      )
      .then(
        (res) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Failed to send message, please try again");
        }
      );
  };

  return (
    <Container fluid className="contact_tab" id="contact">
      <h1 className="contact_header_text text-center" data-aos="fade-up">
        CONTACT
      </h1>
      <Col className="mt-5" sm={12}>
        <Row>
          <Col sm={6} data-aos="zoom-in">
            <ul className="contact__me contact_wrapper">
              <li className="cont__list">
                <a
                  href="https://github.com/russellbanares322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cont__link"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <i className="github">
                      <FaGithub size={50} />
                    </i>
                  </span>
                </a>
              </li>
              <li className="cont__list">
                <a
                  href="mailto:banaresrussell11@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cont__link"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <i className="email">
                      <FaEnvelope size={45} />
                    </i>
                  </span>
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={6} data-aos="fade-up">
            <Form
              ref={form}
              className="contact_form text-dark"
              onSubmit={sendEmail}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name..."
                  name="user_name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email..."
                  name="user_email"
                  required
                />
              </Form.Group>
              <Form.Label>Message</Form.Label>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Your message..."
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="message"
                  required
                />
              </FloatingLabel>
              <p className="feedback_text">I appreciate your feedback!</p>
              <Button
                className="suggestion_send d-flex justify-content-start"
                style={{ backgroundColor: "#05386B", border: "none" }}
                type="submit"
                value="Send"
              >
                Submit
                <RiSendPlane2Line
                  size={20}
                  style={{ margin: "3px", marginLeft: "5px" }}
                />
              </Button>
            </Form>
          </Col>
        </Row>
      </Col>
      <Link to="#home" smooth>
        <BsFillArrowUpCircleFill className="arrow_up" size={40} />
      </Link>
    </Container>
  );
}

export default Contact;
