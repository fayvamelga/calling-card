import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
// import Image from "../images/icon-1.png";
import logo from "../images/logo.png";

function Home() {
  return (
    <>
      <Container className="landing-container">
      <Col className="landing-middle" lg={4} sm={6}>
            <img src={logo} className="landing-images" alt="Create a card" />
          </Col>
      </Container>
    </>
  );
}
export default Home;
