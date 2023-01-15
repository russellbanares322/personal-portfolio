import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProjectsData from "../data/ProjectsData";
import { MdOndemandVideo } from "react-icons/md";
import ProjectDetails from "./ProjectDetails";

function Project() {
  const [projectData, setProjectData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (project) => {
    setProjectData(project);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="text-center project_tab" id="project">
      <h1 className="project_header_text pt-3" data-aos="fade-up">
        PROJECT
      </h1>
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} className="g-3" id="project">
          {ProjectsData.map((project) => (
            <Col className="d-flex justify-content-center" key={project.id}>
              <Card
                className="project_card"
                style={{ width: "23rem", height: "32rem" }}
                data-aos="slide-up"
              >
                <div className="img_wrapper">
                  <Card.Img
                    className="project_img"
                    variant="top"
                    src={project.image}
                  />
                  <div className="info_text_wrapper">
                    <p
                      className="info_text"
                      onClick={() => handleShowModal(project)}
                    >
                      Watch Demo
                      <MdOndemandVideo
                        size={20}
                        style={{ marginLeft: "0.2rem" }}
                      />
                    </p>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle
                    style={{ fontWeight: "200", fontSize: "0.9rem" }}
                    className="my-3"
                  >
                    {project.details}
                  </Card.Subtitle>
                  <Card.Subtitle
                    style={{ fontSize: "0.9rem" }}
                    className="my-3"
                  >
                    {project.technologies}
                  </Card.Subtitle>
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      style={{ backgroundColor: "#05386B", border: "none" }}
                      className="mx-2"
                      disabled={project.live_link === null ? true : false}
                      size="sm"
                    >
                      Live View
                      {project.live_link === null ? (
                        <FaRegEyeSlash
                          size={18}
                          style={{ marginLeft: "4px" }}
                        />
                      ) : (
                        <FaRegEye size={20} style={{ marginLeft: "4px" }} />
                      )}
                    </Button>
                  </a>
                  <a
                    href={project.source_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-dark" size="sm">
                      Source Code
                      <RiCodeSSlashFill
                        size={18}
                        style={{ marginLeft: "4px" }}
                      />
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {showModal && (
          <ProjectDetails
            showModal={showModal}
            setShowModal={setShowModal}
            handleHideModal={handleHideModal}
            {...projectData}
          />
        )}
      </Container>
    </Container>
  );
}

export default Project;
