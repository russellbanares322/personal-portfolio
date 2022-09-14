import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../images/logo.png";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../file/Russell_Banares.pdf";

const PNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  //Hamburger Toggle
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand>
            <Image src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleToggle}
            style={{ border: "0px", color: "#EDF5E1" }}
            aria-controls="basic-navbar-nav"
          >
            {isToggle ? (
              <IoClose
                size={40}
                className="close_navbar"
                style={{ color: "#05386B " }}
              />
            ) : (
              <IoMenu
                size={40}
                className="open_navbar"
                style={{ color: "#05386B " }}
              />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex justify-content-center">
                <Link to="#project" smooth className="link_nav a">
                  Project
                </Link>
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-center">
                <Link to="#about" smooth className="link_nav a">
                  About
                </Link>
              </Nav.Link>

              <Nav.Link className="d-flex justify-content-center">
                <Link to="#contact" smooth className="link_nav a">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <a
                className="text-center"
                href={resume}
                download
                style={{ listStyle: "none" }}
              >
                <Button
                  className="px-4"
                  style={{
                    backgroundColor: "#05386B",
                    border: "none",
                  }}
                >
                  Download CV
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PNavbar;
