import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  AiOutlineContacts,
  AiOutlineDownload,
  AiOutlineProject,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import logo from "../images/logo.png";
import { Container, Image, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../file/Russell_Banares.pdf";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("Portfolio");
  const [navbar, setNavbar] = useState(false);

  //Web title
  useEffect(() => {
    document.title = "Russell Banares | " + isActive;
  }, [isActive]);
  //Hamburger Toggle
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  //Navbar onScroll
  const handleChangeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
      setIsActive("Portfolio");
      if (
        window.scrollY >= 600 &&
        window.scrollY <= 2500 &&
        window.innerWidth > 599
      ) {
        setIsActive("Projects");
      }
      if (
        window.scrollY >= 2000 &&
        window.scrollY <= 2600 &&
        window.innerWidth > 599
      ) {
        setIsActive("About");
      }
      if (window.scrollY > 2700 && window.innerWidth > 599) {
        setIsActive("Contact");
      }
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBg);
  }, []);

  return (
    <>
      <NavbarBs
        expand="lg"
        className={navbar ? "nav active" : "nav"}
        fixed="top"
      >
        <Container>
          <NavbarBs.Brand>
            <Image src={logo} className="logo" />
          </NavbarBs.Brand>
          <NavbarBs.Toggle
            onClick={handleToggle}
            style={{ border: "none", color: navbar ? "#EDF5E1" : "#5CDB95" }}
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
          </NavbarBs.Toggle>
          <NavbarBs.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="d-flex justify-content-center">
                <Link
                  to="#project"
                  smooth
                  className={
                    isActive === "Projects"
                      ? "nav_active"
                      : "" || navbar
                      ? "link_navB b"
                      : "link_nav a"
                  }
                >
                  <AiOutlineProject className="mx-1 mb-1" />
                  Project
                </Link>
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-center">
                <Link
                  to="#about"
                  smooth
                  className={
                    isActive === "About"
                      ? "nav_active"
                      : "" || navbar
                      ? "link_navB b"
                      : "link_nav a"
                  }
                >
                  <AiOutlineQuestionCircle className="mx-1 mb-1" />
                  About
                </Link>
              </Nav.Link>

              <Nav.Link className="d-flex justify-content-center">
                <Link
                  to="#contact"
                  smooth
                  className={
                    isActive === "Contact"
                      ? "nav_active"
                      : "" || navbar
                      ? "link_navB b"
                      : "link_nav a"
                  }
                >
                  <AiOutlineContacts className="mx-1 mb-1" />
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
                <button className="download_btn">
                  Download CV
                  <AiOutlineDownload className="mx-1 mb-1" size={20} />
                </button>
              </a>
            </Nav>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>
    </>
  );
};

export default Navbar;
