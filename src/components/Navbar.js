import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import "./styles.css";
import logo from "../images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [currentPath, setCurrentPath] = useState("Portfolio");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //Changing the title of browser
  useEffect(() => {
    document.title = "Russell Banares | " + currentPath;
  }, [currentPath]);

  //Showing of navbar in smaller screen size
  const handleShowNav = () => {
    navRef.current.classList.toggle("responsive_navbar");
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    navRef.current.classList.remove("responsive_navbar");
    setIsNavOpen(false);
  };

  //Disabling scroll when navbar menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavOpen]);

  //Changing the color of navbar if the user scrolls

  const handleChangeNavBg = () => {
    if (!isNavOpen) {
      if (window.scrollY >= 80) {
        setIsScroll(true);
        setCurrentPath("Portfolio");
        if (
          window.scrollY >= 600 &&
          window.scrollY <= 2500 &&
          window.innerWidth > 599
        ) {
          setCurrentPath("Projects");
        }
        if (
          window.scrollY >= 2000 &&
          window.scrollY <= 2600 &&
          window.innerWidth > 599
        ) {
          setCurrentPath("About");
        }
        if (window.scrollY > 2700 && window.innerWidth > 599) {
          setCurrentPath("Contact");
        }
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeNavBg);
  });
  return (
    <header
      style={{
        display: location.pathname !== "/" ? "none" : "flex",
      }}
      onClick={() => navigate("/")}
      className={isScroll ? "navbar-header-active" : "navbar-header"}
      name="home"
    >
      <img
        onClick={() => navigate("/")}
        src={logo}
        className="navbar-logo"
        alt="logo"
      />
      <nav ref={navRef}>
        <LinkScroll
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#F3F3F3" }}
          activeClass="navbar-links navbar-active-link"
          className={"navbar-links"}
          onClick={handleCloseNav}
          to="home"
        >
          Home
        </LinkScroll>
        <LinkScroll
          isDynamic={true}
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#F3F3F3" }}
          activeClass="navbar-links navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="project"
        >
          Project
        </LinkScroll>
        <LinkScroll
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#F3F3F3" }}
          activeClass="navbar-links navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="about"
        >
          About
        </LinkScroll>
        <LinkScroll
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#F3F3F3" }}
          activeClass="navbar-links navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="contact"
        >
          Contact
        </LinkScroll>

        <button className="navbar-btn navbar-close-btn" onClick={handleShowNav}>
          <HiX />
        </button>
      </nav>
      <button className="navbar-btn navbar-menu-btn" onClick={handleShowNav}>
        <HiMenu />
      </button>
    </header>
  );
};

export default Navbar;
