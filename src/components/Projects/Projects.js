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
              description2=" Project is on the automotive sector, where Lynk and Co has a website,
        mobile app for selling cars, sharing cars, and providing services to the
        customers. The focus of the brand is on internet connectivity and
        innovative purchasing models, targeting a young professional
        demographic."
              demoLink="https://www.lynkco.com/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={honeywell}
              isBlog={false}
              title="Honeywell Technologies Ltd."
              description1="Worked as Tech Lead."
              description2="All Experion System network configuration for an FTE community needs to
        be configured in Configuration Studio. Network configuration prior to
        Experion R520 was done in Control Builder and had to be repeated across
        multiple Experion clusters especially when there were more than one
        Experion server clusters in the same FTE Community. With the
        introduction of C300 (PCNT05), CN100, and Control HIVE, additional
        network configuration is necessary to ensure further segregation of
        supervisory traffic from control, IO, and hive management communication."
              demoLink="https://www.honeywell.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dell}
              isBlog={false}
              title="Dell Technologies Ltd."
              description1="Worked as Team Lead."
              description2="Planning Platform Configuration Management, also known as PPCM, is a Configuration management tool. The PPCM tool is used to view and maintain the master data attributes of Product, Customer, and Channel
        hierarchies. The tool is also used by replenishment planners to maintain and view Fulfillment Center Site Assignments & DSI, Routing rules, and Routing lead times."
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
