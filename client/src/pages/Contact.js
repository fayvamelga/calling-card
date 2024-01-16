import React from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div id="Contact" className="projDiv"></div>
      <h1 className="about-title">Contact Us</h1>
      <Container>
        {/* <Row className="about-spacing"> */}
        <Col >
          {/* <Card className="contactBorder"> */}

          <Row className="contact">
            <h2 className="contactText">We'd love to hear from you!</h2>
          </Row>
          </Col>

</Container>            {/* <h3 className="contactText">Email:  CallingCardllc@gmail.com</h3>
    <h3 className="contactText">Twitter:   <Link  to="https://twitter.com/callingcardllc?s=21">@callingcardllc</Link></h3>
    <h3 className="contactText">Instagram:   <Link  to="https://instagram.com/callingcardllc?utm_medium=copy_link">@callingcardllc</Link></h3> */}
    <Container className="form">
      <Col>
            <Form>
            <Form.Group
                className="mb-3" as={Col} md="8"
              >
                <Form.Label className="contactForm"></Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <br></br>
                   <Form.Group
                className="mb-3"
              >
                <Form.Label className="contactForm"></Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <br></br>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="contactForm"> </Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="Message"/>
              </Form.Group>
              <Button className="Button">Send Message</Button>{' '}
            </Form>
          {/* </Row> */}
          {/* </Card> */}
        </Col>
        {/* <Col >
    <Card className="projBorder">
 
      <Row className="about">
          <h2 className="about-title">Message Us</h2>
      </Row>
  
      <Form className="contactForm">
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
      </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
}
export default Contact;
