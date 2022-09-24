import ReactPlayer from "react-player";
import Ecommerce from "../components/projectVids/E-commerce.mp4";
import CryptoTracker from "../components/projectVids/Crypto-App.mkv";
import BudgetPlanner from "../components/projectVids/budget-planner.mp4";
import TaskManager from "../components/projectVids/taskmanager.mp4";
import FirebaseCrud from "../components/projectVids/firebase-crud.mkv";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Container fluid className="text-center project_tab" id="project">
      <h1 className="project_header_text pt-3" data-aos="fade-up">
        PROJECT
      </h1>
      <Container>
        <Row className="d-flex justify-content-center" id="project">
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer controls url={FirebaseCrud} className="react_player" />
            <p className="mt-3 project_name">ReactJS Firebase Crud</p>
            <p className="project_details">
              A project that you can create, read and update. It also has an
              image upload functionality
            </p>
            <p className="project_tool">ReactJS | Firebase</p>
            <a
              href="https://russcrud.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-5 button_live">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/Russ-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://github.com/russellbanares322/react-firebase-crud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className="mb-5">
                  Source Code
                  <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
                </Button>
              </a>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={CryptoTracker}
              className="react_player"
            />
            <p className="mt-3 project_name">Crypto Currency Tracker</p>
            <p className="project_details">
              A project that uses an api to fetch data about crypto currency
              prices, with the help of axios library
            </p>
            <p className="project_tool">ReactJS | Axios</p>
            <a
              href="https://russellbanares322.github.io/cryptotrackerapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-5 button_live">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/Russ-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://github.com/russellbanares322/cryptotrackerapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" className=" mb-5">
                  Source Code
                  <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
                </Button>
              </a>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={BudgetPlanner}
              width="399px"
              height="260px"
              className="react_player"
            />
            <p className="mt-3 project_name">Budget Tracker</p>
            <p className="project_details">
              Static web application that function a simple computation in
              increasing and decreasing of an expense value
            </p>
            <p className="project_tool">ReactJS</p>
            <a
              href="https://russellbanares322.github.io/budget-tracker-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button_live mb-5">
                Live View <FaRegEye size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
            <a
              href="https://github.com/russellbanares322/budget-tracker-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={TaskManager}
              width="399px"
              height="260px"
              className="react_player"
            />
            <p className="mt-3 project_name">Task Manager</p>
            <p className="project_details">
              Crud project with the use of Laravel
            </p>
            <p className="project_tool">Laravel | Javascript</p>
            <Button className="mb-5 button_live disabled">
              Live View{" "}
              <FaRegEyeSlash size={20} style={{ marginLeft: "2px" }} />
            </Button>
            <a
              href="https://github.com/russellbanares322/laraveltaskmanager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
          <Col sm={5} md={5} className="column_project" data-aos="zoom-in">
            <ReactPlayer
              controls
              url={Ecommerce}
              width="399px"
              height="260px"
              className="react_player"
            />
            <p className="mt-3 project_name">
              Responsive E-commerce Website Boilerplate
            </p>
            <p className="project_details">
              Simple boilerplate for an ecommerce site
            </p>
            <p className="project_tool">HTML | CSS</p>
            <Button className="mb-5 button_live disabled">
              Live View
              <FaRegEyeSlash size={20} style={{ marginLeft: "2px" }} />
            </Button>
            <a
              href="https://github.com/russellbanares322/Russ-Ecommerce-Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline-dark" className="mb-5">
                Source Code
                <RiCodeSSlashFill size={20} style={{ marginLeft: "2px" }} />
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
