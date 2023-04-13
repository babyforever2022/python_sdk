import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillSkype,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord, SiGmail, SiMicrosoftoutlook, SiLinkedin } from "react-icons/si";
import { address } from "./Address";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3 style={{fontSize: 20}}> にこらすかとうがデザイン・開発 </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3 style={{fontSize: 20}}>Copyright © {year} &nbsp;&nbsp; にこらす</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={address.github}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.gmail}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.outlookmail}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiMicrosoftoutlook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.skype}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.discord}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.telegram}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={address.linkedin}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
