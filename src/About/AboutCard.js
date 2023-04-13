import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <strong className="purple"> Nicholas Kato </strong>
            from<strong className="purple"> Kyoto, Japan.</strong>
            <br />I am a React | Vue & Python | Nest.js Web Developer who contributing Open-source projects and aiming for learning new technologies, and skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Ping-pong
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
          </ul>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            " 大きな目標を持って成功を収めるために努力してください！"
          </p>
          <footer className="blockquote-footer"><span style={{fontSize: 20}}> にこらす </span></footer>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to achieve the success with a great goal!"
          </p>
          <footer className="blockquote-footer"> Nicholas </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
