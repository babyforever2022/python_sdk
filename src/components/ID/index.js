import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/me-perfect-current.png";
import myID from "../../Assets/id.jpg";
// import Iframe from 'react-iframe';

function LinkedIn() {
    return (
        <Container fluid className="resume-section" style={{
            minHeight: window.innerHeight - 10
        }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: '50%', maxHeight: 500 }} />
                        </Tilt>
                    </Col>
                    <Col md={6}>
                        <img src={myID} className="img-fluid" alt="Id" style={{ maxHeight: 500 }} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default LinkedIn;
