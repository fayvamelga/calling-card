import React from "react";
import { Row, Container, Card } from "react-bootstrap";


function About() {
  return (
    <>
    <h1 className="about-title" id="About">About Us</h1>
      <Container className="about">
    
      <Card className="border">
   
        <Row className="about">
            <h2 className="about-title">Who We Are</h2>
        </Row>

        <Row className="about">
<h3>Calling Card LLC is a media company that develops and shares Ethiopian stories from across the globe.</h3>
        </Row>
        </Card>
          </Container>

          <Container className="about">
    
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">Mission</h2>
      </Row>

      <Row className="about">
<h3>Our mission is to magnify Ethiopian voices from around the world.</h3>
      </Row>
      </Card>
        </Container>

        <Container className="about">
    
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">Our Objectives</h2>
      </Row>

      <Row >
      <ul >
<h3 className="about">Produce media that speaks to the Ethiopian experience.</h3>
<h3 className="about">Produce tools, resources, and opportunities for Ethiopians to share their stories.</h3>
</ul>
      </Row>
      </Card>
        </Container>

        <Container className="about">
    
    <Card className="border">
 
      <Row className="about">
          <h2 className="about-title">What We Do</h2>
      </Row>

      <Row>
        <ul >
<h3 className="about">Podcasting</h3>
<h3 className="about">Screenwriting</h3>
<h3 className="about">Film Production</h3>
</ul>
      </Row>
      </Card>
        </Container>
        

    </>
  );
}
export default About;
