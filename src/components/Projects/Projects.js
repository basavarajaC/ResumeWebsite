import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wipro from "../../Assets/Projects/Wipro.png";
import dell from "../../Assets/Projects/Dell.jpeg";
import honeywell from "../../Assets/Projects/Honeywell.png";
import lynkandco from "../../Assets/Projects/Lynk-Co.jpeg";
import polestar from "../../Assets/Projects/polestar.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="white">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few companies/projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polestar}
              isBlog={false}
              title="Polestar Cars"
              description1="Worked as Full Stack Developer."
              description2="Polestar is an automotive brand that specializes in electric performance cars. It was originally a performance brand of Volvo Cars but was later spun off as a standalone brand jointly owned by Volvo Cars and its parent company Geely Holding of China. Polestar aims to produce electric vehicles (EVs) that combine performance, innovative design, and sustainability."
              demoLink="https://www.polestar.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lynkandco}
              isBlog={false}
              title="Lynk and Co Cars"
              description1="Worked as Devops Lead."
              description2="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              demoLink="https://www.lynkco.com/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={honeywell}
              isBlog={false}
              title="Honeywell Technologies Ltd."
              description1="Worked as Tech Lead."
              description2="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              demoLink="https://www.honeywell.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dell}
              isBlog={false}
              title="Dell Technologies Ltd."
              description1="Worked as Team Lead."
              description2="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              demoLink="https://www.dell.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wipro}
              isBlog={false}
              title="Wipro Technologies Ltd."
              description1="Worked as Senior Project Engineer."
              description2="PWBS is the Wipro’s project, employee movement tool. This will be used by Managers, Account Heads for allocating budget to project, Movement of employees between the projects and Onsite etc."
              demoLink="https://www.wipro.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
