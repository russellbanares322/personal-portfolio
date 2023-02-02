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

function Contact() {
  //Animate on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //Email JS
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        REACT_APP_USER_ID,
        form.current
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          setIsLoading(false);
        },
        () => {
          toast.error("Failed to send message, please try again");
        }
      );
  };

  return (
    <Container fluid className="contact_tab" name="contact">
      <p className="contact_header_text text-center" data-aos="fade-up">
        GET IN TOUCH
      </p>
      <Form ref={form} className="contact_form text-dark" onSubmit={sendEmail}>
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
    </Container>
  );
}

export default Contact;
