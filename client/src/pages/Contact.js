import React from "react";
import { Row, Container, Card, Col, Image, Form } from "react-bootstrap";
import ceremony from '../images/ceremony.png'
import podcast from '../images/podcast.png'


function Contact() {
  return (
    <>
    <div id="Contact" className="projDiv"></div>
    <h1 className="about-title" >Contact Us</h1>
      <Container className="about">
        {/* <Row className="about-spacing"> */}
    <Col className="about-spacing">
      <Card className="projBorder">
   
        <Row className="about">
            <h2 className="about-title">Contact Us</h2>
        </Row>
    <h3>Email: CallingCardllc@gmail.com</h3>
    <h3>Twitter: <span  href="https://twitter.com/callingcardllc?s=21">@callingcardllc</span></h3>
    <h3>Instagram: </h3>
        </Card>
        </Col>
    <Col >
    <Card className="projBorder">
 
      <Row className="about">
          <h2 className="about-title">Message Us</h2>
      </Row>
  
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
      </Card>
      </Col>
      {/* </Row> */}
        </Container>
        

    </>
  );
}
export default Contact;
