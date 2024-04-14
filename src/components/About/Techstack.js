import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCsharp, SiDotnet } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiPython,
  SiMicrosoftazure,
  SiAmazonaws,
  SiDatadog,
  SiKubernetes,
  SiAzuredevops,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-toggle="C#" data-tip="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip=".NET">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Microsoft Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Amazon AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Datadog">
        <SiDatadog />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Kubernetes">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Azure DevOps">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tip="Java">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
