import React from "react";
import { Row, Container, Card, Col, Image } from "react-bootstrap";
import ceremony from '../images/ceremony.png'
import podcast from '../images/podcast.png'


function Projects() {
  return (
    <>
    <div id="Projects" className="projDiv"></div>
    <h1 className="about-title" >Projects</h1>
      <Container className="about">
        <Row className="about-spacing">
    <Col className="about-spacing">
      <Card className="projBorder">
   
        <Row className="about">
            <h2 className="about-title">Ceremony</h2>
        </Row>
        <Row>
            <Image className="ceremonyImg" src={ceremony}>
            </Image>
        </Row>
        <Row className="about-text">
<h3>Ceremony is a short film that 
showcases an encounter 
between two strangers over 
traditional Ethiopian coffee.
</h3>
        </Row>
        </Card>
        </Col>
    <Col >
    <Card className="projBorder">
 
      <Row className="about">
          <h2 className="about-title">Start From the Beginning</h2>
      </Row>
  
      <Row className="about-text">
<h3>Through a series of interview 
conversations, Start from 
the Beginning explores the 
journeys of an Ethiopian 
Diaspora family group in the 
US, how they got here, what 
they found when they 
arrived, and why each of them 
decided to stayed, or didn’t.</h3>
      </Row>
      <Row>
            <Image className="podcastImg" src={podcast}>
            </Image>
        </Row>
      </Card>
      </Col>
      </Row>
        </Container>
        

    </>
  );
}
export default Projects;
