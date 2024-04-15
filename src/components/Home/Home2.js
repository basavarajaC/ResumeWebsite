import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="white"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With 13 years of experience, I have a strong background in the
              automotive, banking, and retail domains.
              <br />
              <br /> My expertise includes{" "}
              <b className="white">
                <i>
                  Solution Architecting, Web development, Cloud solutioning,
                  DevSecOps, DevOps, Requirement analysis, Problem-solving, and
                  System integration.
                </i>
              </b>
              <br />
              <br />
              <b>
                <i>
                  Azure developer associate and Azure Security certified
                  developer. &nbsp;
                </i>
              </b>
              <br />
              <br />I have successfully designed scalable solutions, developed
              user-friendly web applications, and leveraged cloud platforms like
              <b className="white">
                <i> Azure, AWS. &nbsp;</i>{" "}
              </b>
              <br />
              <br />
              <p>
                I excel in analyzing requirements, solving complex problems, and
                integrating multiple products. My versatile skill set, and
                domain knowledge make me an asset in delivering successful
                projects.
              </p>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="white">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/basavarajaNC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/basavcn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/basavaraja_cn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
