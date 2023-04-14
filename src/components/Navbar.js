import React, { useEffect, useRef, useState } from "react";
import {
  HiMenu,
  HiOutlineChartSquareBar,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineMail,
  HiX,
} from "react-icons/hi";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [currentPath, setCurrentPath] = useState("Portfolio");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();

  //Changing the title of browser
  useEffect(() => {
    document.title = "Russell Banares | " + currentPath;
  }, [currentPath]);

  //Showing of navbar in smaller screen size
  const handleToggleNav = () => {
    navRef.current.classList.toggle("responsive_navbar");
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
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
          style={{ color: isScroll ? "#05386B" : "#ffff" }}
          activeClass="navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="home"
        >
          Home
          <HiOutlineHome className="nav-links-icon" size={22} />
        </LinkScroll>
        <LinkScroll
          isDynamic={true}
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#ffff" }}
          activeClass="navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="project"
        >
          Project
          <HiOutlineChartSquareBar className="nav-links-icon" size={22} />
        </LinkScroll>
        <LinkScroll
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#ffff" }}
          activeClass="navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="about"
        >
          About
          <HiOutlineIdentification className="nav-links-icon" size={22} />
        </LinkScroll>
        <LinkScroll
          spy={true}
          duration={500}
          style={{ color: isScroll ? "#05386B" : "#ffff" }}
          activeClass="navbar-active-link"
          className="navbar-links"
          onClick={handleCloseNav}
          to="contact"
        >
          Contact
          <HiOutlineMail className="nav-links-icon" size={22} />
        </LinkScroll>
      </nav>
      <button className="navbar-btn navbar-menu-btn" onClick={handleToggleNav}>
        {!isNavOpen ? <HiMenu /> : <HiX />}
      </button>
    </header>
  );
};

export default Navbar;
