import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Title from "./Title";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Project />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
