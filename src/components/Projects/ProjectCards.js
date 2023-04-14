import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiGitBranch } from "react-icons/bi";
function ProjectCards(props) {
  const { techs, isGit } = props;
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", minHeight: 200 }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <p style={{ textAlign: 'center' }}>
            {techs.map((data, key)=>(
              <img style={{height: 35, margin: 5}} key={key} src={data} />
            ))}
          </p>
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          {isGit && <BiGitBranch />}
          {!isGit && <BiLinkExternal />} &nbsp;
          {props.isBlog ? "View Blog" : isGit ? "View on Github" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
