import React from "react";
import { Modal } from "react-bootstrap";

const ProjectDetails = ({ video, title, showModal, handleHideModal }) => {
  return (
    <div>
      <Modal
        fullscreen="sm-down"
        show={showModal}
        onHide={handleHideModal}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video className="video" src={video} controls muted />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
