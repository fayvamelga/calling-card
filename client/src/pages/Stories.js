import React from "react";
import { Row, Container, Button, Col } from "react-bootstrap";

function Story () {
    return (
        <>
        <div id="Story" className="div">
            <br></br>
            <br></br>
            <h1 className="about-title">Share Your Story</h1>
            <br></br>
        <Container>
            <Row className="text-center">
                <p className="storyText">Add your family’s story to the diaspora archive.</p>
            </Row>
            <br></br>
            <br></br>
            <div className="d-grid gap-2">
      <Button variant="outline-light" size="lg">
        Submit Audio
      </Button>
      <br></br>
      <br></br>     
      <Button variant="outline-light" size="lg">
        Archives
      </Button>
    </div>
        </Container>
        <br></br>
        <br></br>     <br></br>     <br></br>
        </div>
        </>
    );
}
export default Story;