import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/me.png";
// import Iframe from 'react-iframe';

function LinkedIn() {
    return (
        <Container fluid className="resume-section">
            <Container>
                <Row>
                    <Col md={12}>
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: '50%', height: 500 }} />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default LinkedIn;
