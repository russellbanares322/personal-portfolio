import React from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Title from "./Title";

const Home = () => {
  return (
    <div>
      <Title />
      <Project />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
