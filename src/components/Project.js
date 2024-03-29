import { Card, Container, Row, Col } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { projectsData } from "../data/ProjectsData";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="text-center project_tab" name="project">
      <p className="project_header_text" data-aos="fade-up">
        PROJECTS
      </p>
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} className="g-3" id="project">
          {projectsData.map((project) => (
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
                    src={project.thumbnail_image}
                  />
                  <div className="info_text_wrapper">
                    <p
                      className="info_text"
                      onClick={() => {
                        navigate(`/project-details/${project.id}`);
                      }}
                    >
                      View Details
                      <HiOutlineInformationCircle
                        size={20}
                        style={{ marginLeft: "0.2rem" }}
                      />
                    </p>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle
                    style={{ fontWeight: "300", fontSize: "0.9rem" }}
                    className="my-3"
                  >
                    {project.details}
                  </Card.Subtitle>
                  <div className="project_technologies">
                    <Card.Subtitle
                      className="my-3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {project.technologies.join(" | ")}
                    </Card.Subtitle>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    {project.live_link !== null ? (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="live_btn">
                          Live View
                          <FaRegEye size={20} style={{ marginLeft: "4px" }} />
                        </button>
                      </a>
                    ) : (
                      <button
                        className="live_btn"
                        onClick={() =>
                          toast.error("This project hasn't been deployed yet.")
                        }
                      >
                        Live View
                        <FaRegEyeSlash
                          size={18}
                          style={{ marginLeft: "4px" }}
                        />
                      </button>
                    )}
                    <a
                      href={project.source_code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="source_code_btn">
                        Source Code{" "}
                        <RiCodeSSlashFill
                          size={18}
                          style={{ marginLeft: "4px" }}
                        />
                      </button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
