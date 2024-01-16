import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";

function Podcast () {
    return (
        <>
        <div id="Podcast" className="div">
            <br></br>
            <h1 className="about-title">Podcast</h1>
        <Container>
            <Row className="contact">
                <h2 className="contactText">There are currently no episodes. Check back soon!</h2>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default Podcast;