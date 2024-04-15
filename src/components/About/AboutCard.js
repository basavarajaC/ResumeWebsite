import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="white">Basavaraja CN </span>
            from <span className="white"> Davanagere, Karnataka, India. </span>
            Currently living in
            <span className="white"> Gothenburg, Sweden</span> from last 2.8
            years.
            <br /> <br />
            I am currently employed as a Senior fullstack developer at Polestar.
            <br />
            <br />
            I have completed MS in (Computer science) at BITS Pilani India.
            <br />
            <br />
            Apart from Job, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing badminton
            </li>
            <li className="about-activity">
              <ImPointRight />
              <a
                href="https://medium.com/@bsvrj9320"
                target="_blank"
                rel="noreferrer"
                className="icon-colour"
              >
                Writing Tech Blogs
              </a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
