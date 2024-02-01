import React from "react";
import { Row, Container, Col, Form, Image, Button, } from "react-bootstrap";
import { Link } from "react-router-dom";
import instagram from "../images/instagram.png"; 
import X from "../images/twitter.png";
import youtube from "../images/yt.png";

function Contact() {
  return (
    <>
      <div id="Contact" className="projDiv"></div>
      <h1 className="about-title">Connect With Us</h1>
      <br></br>
             
<Container>
      <Row className="icons"> 
        <Col xs={4} md={4} className="icons" >
          <Image src={instagram} rounded className="ig" />
        </Col>
        <Col xs={4} md={4} className="icons">
          <Image src={X} rounded className="icons"/>
        </Col>
        <Col xs={4} md={4} className="icons" >
          <Image src={youtube} rounded className="icons"/>
        </Col>
      </Row>
    </Container>
    </>
  );
}
export default Contact;
