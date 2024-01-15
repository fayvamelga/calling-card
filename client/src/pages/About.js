import React from "react";
import { Row, Container, Card, Col } from "react-bootstrap";
import wwa from "../images/WWA.png";
import wwd from "../images/WWD.png";


function About() {
  return (
    <>
    <div id="About" className="div"></div>
    <br></br>
    <h1 className="about-title" >About Us</h1>
      <Container className="about">
        {/* <Row className="about-spacing"> */}
    <Col>
      <Card className="border">
        <Row className="about">
      <img src={wwa}  alt="Calling Card logo" /> 
      </Row>
        <Row className="about">
            <h1 className="about-title">Who We Are</h1>
        </Row>

        <Row className="about">
          <li>
<h2 className="about-text">Calling Card LLC is a media company that develops and shares Ethiopian stories from across the globe.</h2>
</li>
        </Row>
        </Card>
        </Col>

        <Col>
        <Card className="border">
        <Row className="about"> 
      <img src={wwd}  alt="Calling Card logo" /> 
      </Row >
 <Row className="about">
     <h1 className="about-title">What We Do</h1>
 </Row>

 <Row>
  <li>
<h2 className="about-text">Podcasting</h2>
<h2 className="about-text">Screenwriting</h2>
<h2 className="about-text">Film Production</h2>
</li>
 </Row>
 </Card>
        </Col>
  
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
}
export default About;
