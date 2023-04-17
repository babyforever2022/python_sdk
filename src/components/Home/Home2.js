import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/white-round.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillSkype,
} from "react-icons/ai";
import { FaTelegram, FaDiscord, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { address } from "../Address";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.1em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF BRIEFLY!
            </h1>
            <p className="home-about-body">
              I fall in love with programming, so programs are a part of my life and I live with them all the time, I think… 🤷‍♂️
              <br />I am so fluent in the dynamic program languages like
              <span>
                <b className="purple font-style-normal"> JavaScript, TypeScript, and Python. </b>
              </span>
              <br />
              <br />
              I also apply my passion for developing websites
              with <span><b className="purple font-style-normal">Express.js | Nest.js with Node.js</b></span> and
              <span>
                <b className="purple font-style-normal">
                  {" "}
                  Modern JavaScript Library and Frameworks
                </b>
              </span>
              &nbsp; like
              <span>
                <b className="purple font-style-normal"> React.js or Next.js, and Vue.js. </b>
              </span>
              <br />
              <br />
              My field of Interest is building new&nbsp;
              <span>
                <b className="purple font-style-normal">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple font-style-normal">
                  Deep Learning and Natural Technologies Processing.
                </b>
              </span>
              <br />
              <br />

              Currently, I am focused on Blockchain development with
              <span>
                <b className="purple font-style-normal">
                  {" "}
                  Solidity
                </b>
              </span> and
              <span>
                <b className="purple font-style-normal">
                  {" "}
                  Web3.js.
                </b>
              </span>
              <br />
              If you are a reliable customer who can support me until the end, I will always be with you.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: '50%' }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={address.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={address.gmail}
                  target="_blank"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={address.skype}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={address.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={address.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={address.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedin />
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
