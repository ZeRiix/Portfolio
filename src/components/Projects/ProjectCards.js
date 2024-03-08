import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
