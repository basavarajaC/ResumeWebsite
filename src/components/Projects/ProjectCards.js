import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import ProjectsModal from "./ProjectsModal";

function ProjectCards(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>{props.description1}</p>
          <p>{props.description2}</p>
        </Card.Text>

        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          onClick={() => setModalShow(true)}
        >
          &nbsp;
          {props.isBlog ? "Blog" : "Projects"}
        </Button>
        {"\n"}
        {"\n"}

        <ProjectsModal
          model={props.title}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
