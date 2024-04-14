import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Polestar from "./Polestar";
import LynkAndCo from "./LynkAndCo";
import Honeywell from "./Honeywell";
import Dell from "./Dell";
import Wipro from "./Wipro";

function ProjectsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>{props.model}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          {(() => {
            if (props.model.includes("Polestar")) {
              return <Polestar></Polestar>;
            } else if (props.model.includes("Lynk")) {
              return <LynkAndCo></LynkAndCo>;
            } else if (props.model.includes("Honeywell")) {
              return <Honeywell></Honeywell>;
            } else if (props.model.includes("Dell")) {
              return <Dell></Dell>;
            } else {
              return <Wipro></Wipro>;
            }
          })()}
        </>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectsModal;
