import React from "react";
import { Row, Container, Button, Col } from "react-bootstrap";

function Story () {
    return (
        <>
        <div id="Story" className="div">
            <br></br>
            <h1 className="about-title">Share Your Story</h1>
        <Container>
            <Row className="contact">
                <p className="contactText">Add your family’s story to the diaspora archive.</p>
            </Row>
            <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
        </Container>
        </div>
        </>
    );
}
export default Story;