import React, { useEffect, useRef, useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import { Container, Form, FloatingLabel } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

//Api keys
const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env;

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Animate on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //Email JS
  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setValidated(true);
    if (formRef === null) {
      return;
    }
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setIsLoading(false);
    } else {
      emailjs
        .sendForm(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          formRef.current,
          REACT_APP_USER_ID
        )
        .then(
          () => {
            toast.success("Message sent successfully");
            setIsLoading(false);
            setValidated(false);
            e.target.reset();
          },
          () => {
            toast.error("Failed to send message, please try again");
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <Container fluid className="contact_tab" name="contact">
      <p className="contact_header_text text-center" data-aos="fade-up">
        GET IN TOUCH
      </p>
      <div className="form_wrapper">
        <Form
          noValidate
          validated={validated}
          ref={formRef}
          className="contact_form text-dark"
          onSubmit={handleSendEmail}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name..."
              name="user_name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              name="user_email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              Please enter a message
            </Form.Control.Feedback>
          </FloatingLabel>
          <p className="feedback_text">I appreciate your feedback!</p>
          <div className="send_btn_wrapper">
            <button
              value="Send"
              type="submit"
              className="send_btn"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
              <RiSendPlane2Line
                size={20}
                style={{ margin: "3px", marginLeft: "5px" }}
              />
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
