import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCards from "./CertificationCards";
import Particle from "../Particle";
import azurefon from "../../Assets/azure-data-fundamentals.png";

import {
  SiRedis,
  SiPython,
  SiMicrosoftazure,
  SiAmazonaws,
  SiDatadog,
  SiKubernetes,
  SiAzuredevops,
} from "react-icons/si";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="white">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={azurefon}
              isBlog={false}
              title="AZ-900"
              description="The Azure Fundamentals certification is an entry-level certification offered by Microsoft that validates your understanding of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support."
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={azurefon}
              isBlog={false}
              title="AZ-204"
              description="The Microsoft Certified: Azure Developer Associate certification is designed for developers who design, build, test, and maintain cloud solutions on Microsoft Azure. This certification validates your expertise in various Azure development tasks, including Azure SDKs, data storage solutions, Azure App Service, and more."
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCards
              imgPath={azurefon}
              isBlog={false}
              title="AZ-500"
              description="The Microsoft Certified: Azure Security Fundamentals certification is an entry-level certification that validates your understanding of foundational cloud concepts and the basics of Azure security, privacy, compliance, and trust. This certification is suitable for individuals who are looking to validate their knowledge of Azure security features and services.."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
