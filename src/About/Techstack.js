import React from "react"
import { Col, Row } from "react-bootstrap"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiPostgresql,
  SiSolidity, SiExpress, SiWeb3Dotjs
} from "react-icons/si"
import { RiVuejsFill } from "react-icons/ri"
import { DiLaravel } from "react-icons/di"
import { FaPhp, FaRust, FaCss3 } from "react-icons/fa"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVuejsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRust />
      </Col>
    </Row>
  );
}

export default Techstack;
