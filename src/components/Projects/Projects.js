import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CmStream from "../../Assets/Projects/streamshare.png";
import portalKnight from "../../Assets/Projects/portal_knight.png";
import frameworkFront from "../../Assets/Projects/framework_front.png";
import seaence from "../../Assets/Projects/seaence.png";
import met from "../../Assets/Projects/met.png";
import duplo from "../../Assets/Projects/duplo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seaence}
              isBlog={false}
              title="Seance"
              description="Seaence is a platform designed to simplify the search for articles, studies, and books in the medical field. Currently, data access is challenging due to the large number of specialized platforms focused on specific areas. Seaence offers a centralized and user-friendly solution, enabling even students without technical expertise to obtain relevant results. The project integrates a vector database, artificial intelligence, translation via LLM (LibreTranslate), and an intuitive querying language inspired by Scratch."
              link="https://github.com/mathcovax/seaence"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duplo}
              isBlog={false}
              title="DuploJS"
              description="Duplo is comparable to Express or Fastify, directly interfacing with native platform APIs. Duplo does not handle ORM layers or service management but provides solutions for integration. Its role is to encourage thorough validation to ensure data reliability."
              link="https://docs.duplojs.dev/fr/latest/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={met}
              isBlog={false}
              title="Mon Enorme Tronc"
              description="Mon Énorme Tronc is an e-commerce website project that allows the sale of adult products in a marketplace. It is similar to BackMarket."
              link="https://github.com/mathcovax/mon-enorme-tronc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portalKnight}
              isBlog={false}
              title="Platform Knight"
              description="Android 2D platform relay under Unity. equipped with 5 levels with a unique atmosphere. at the control of a little knight you can fight against all a bestiary, collect and pick up various objects that will help you in your adventure."
              link="https://github.com/ZeRiix/platform_knight"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CmStream}
              isBlog={false}
              title="CMStream"
              description="Streaming site under development. simple concept, all users of the platform must participate by adding a variety of content to expand our library every day. works with streamtape, sibnet, jwloader api. Equipped with a back where you can easily administer users as well as content and comments."
              link="https://github.com/Vitaalx/cmstream"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frameworkFront}
              isBlog={false}
              title="Framework Music Front"
              description="Framework for the front of a music streaming site. made In natif javascript, html, css. this project allows you to build a music streaming site quickly without using a modern framework. it was created as part of a school project"
              link="https://github.com/Vitaalx/challenge-s1-web/tree/develop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
