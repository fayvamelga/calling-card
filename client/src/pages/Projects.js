import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import ceremony from '../images/ceremony.png';
import podcast from '../images/podcast.png';


function Projects() {
  return (
    <>
    
    <div id="Projects" className="projDiv"></div>
    <h1 className="about-title" >Projects</h1>
      <Container className="about">
        {/* <Row className="about-spacing"> */}
    {/* <Col className="about-spacing"> */}
    <Row >
    <h2 className="about-title">Ceremony</h2>
    <br></br>
    <Row>
      <Col >
        <Image className="ceremonyImg" src={ceremony} alt="Ceremony Image" />
      </Col>
      <Col >
        <p className="ceremonyText">
          Ceremony is a short film that showcases an encounter between two strangers over traditional Ethiopian coffee.
        </p>
      </Col>
    </Row>
</Row>

        {/* </Col> */}



    <Col >
    
 
      <Row className="about">
          <h2 className="about-title">Start From the Beginning</h2>
      </Row>
  
  <Row>
      <Col >
<h3 className="ceremonyText">Through a series of interview 
conversations, Start from 
the Beginning explores the 
journeys of an Ethiopian 
Diaspora family group in the 
US, how they got here, what 
they found when they 
arrived, and why each of them 
decided to stayed, or didn’t.</h3>
      </Col>
      <Col>
            <Image className="podcastImg" src={podcast}>
            </Image>
        </Col>
        </Row>
      {/* </Card> */}
      </Col>
      {/* </Row> */}
        </Container>
        

    </>
  );
}
export default Projects;
