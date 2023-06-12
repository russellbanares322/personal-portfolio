import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Title from "./Title";
import Navbar from "./Navbar";
import { ClimbingBoxLoader } from "react-spinners";

const Home = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner_wrapper">
          <ClimbingBoxLoader size={19} color={"#5CDB95"} loading={isLoading} />
        </div>
      ) : (
        <>
          <Navbar />
          <Title />
          <Project />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
