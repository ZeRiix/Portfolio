import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Florentin William </span>
            from <span className="purple"> Paris, France.</span>
            <br />I am a junior studying in Web Engineering at ESGI.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#a5a54c" }}>
            "Deleted code is debugged code."{" "}
          </p>
          <footer className="blockquote-footer">Jeff Sickel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
