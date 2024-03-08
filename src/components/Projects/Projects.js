import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import javaApp from "../../Assets/Projects/java_app.PNG";
import CmStream from "../../Assets/Projects/streamshare.png";
import editor from "../../Assets/Projects/coming-soon.jpg";
import speedCashWebsite from "../../Assets/Projects/speed_cash_website.png";
import portalKnight from "../../Assets/Projects/portal_knight.png";
import frameworkFront from "../../Assets/Projects/framework_front.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speedCashWebsite}
              isBlog={false}
              title="Speed Cash"
              description="Commercial site with management of customers, companies and partners. create in native php, javascript, jquerry. equipped with a mobile app for managing partner cards in the store and a java app for managing stock and warehouses.payment via strip and provided with a small webGL animation via three.js."
              link="https://github.com/Vitaalx/Speed-Cash.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="App Android"
              description="Small android application made in java for the speed-cash.fr website. allows the management of cleints cards for partner companies. equipped with a bar code and qrcode reader for recent and old cards. card generated after subscription on the speed-cash.fr website."
              link="https://github.com/ZeRiix/app_android_speed-cash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javaApp}
              isBlog={false}
              title="App Java"
              description="Java app realize with javafx and mysqlclient. allows consultation, addition, deletion and modification of stock in real time. makes it possible to control the stock of each deposit at any time from a user station of the speed-cash company."
              link="https://github.com/ZeRiix/app_java_speed-cash"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
