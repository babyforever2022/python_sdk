import React from "react";
import { Container, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Container fluid className="resume-section">
      <p style={{fontSize: 180, fontWeight: 'bold', color: '#c770f0'}}> 404 </p>
      <p style={{fontSize: 30, color: '#c770f0'}}> This page is not found. </p>
      <br />
      <Button onClick={()=>{window.location.href = "/"}}> Go to Dashboard </Button>
    </Container>
  );
}

export default NotFound;
