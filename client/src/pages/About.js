import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";


function About() {
  return (
    <>
    <div id="About" className="div"></div>
    <h1 className="about-title" >About Us</h1>
      <Container className="about">
        <Row className="about-spacing">
    <Col>
      <Card className="border">
   
        <Row className="about">
            <h2 className="about-title">Who We Are</h2>
        </Row>

        <Row className="about-text">
<h3>Calling Card LLC is a media company that develops and shares Ethiopian stories from across the globe.</h3>
        </Row>
        </Card>
        </Col>
    <Col>
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">Mission</h2>
      </Row>

      <Row className="about-text">
<h3>Our mission is to magnify Ethiopian voices from around the world.</h3>
      </Row>
      </Card>
      </Col>
      </Row>

      <Row>
    <Col>
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">Our Objectives</h2>
      </Row>

      <Row >
      <ul >
<h3 className="about-text">Produce media that speaks to the Ethiopian experience.</h3>
<h3 className="about-text">Produce tools, resources, and opportunities for Ethiopians to share their stories.</h3>
</ul>
      </Row>
      </Card>
      </Col>
    <Col>
    
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">What We Do</h2>
      </Row>

      <Row>
        <ul >
<h3 className="about-text">Podcasting</h3>
<h3 className="about-text">Screenwriting</h3>
<h3 className="about-text">Film Production</h3>
</ul>
      </Row>
      </Card>
      </Col>
      </Row>
        </Container>
        

    </>
  );
}
export default About;
