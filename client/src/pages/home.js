import React from "react";
import { Row, Container } from "react-bootstrap";
import logo from "../images/logo.png";
import voice from "../images/voice.png";
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";
import Contact from "./Contact";

function Home() {
  return (
    <>
    <Container>
      <Container className="landing">
        <Row className="logo">
      {/* <Col className="landing-middle " lg={4} sm={6}> */}
            <img className="logo" src={logo}  alt="Calling card logo" />
            {/* </Col> */}
            </Row>
            </Container>

            <Container className="landing">

            <Row>
            {/* <Col className="landing-middle " lg={4} sm={6}> */}
            <h1 className="landing-text">Ethiopian voices live here.</h1>
            <img className="voice" src={voice}  alt="voice clipart" />
          {/* </Col> */}
          </Row>
      </Container>



      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </Container>
      </>
  );
}
export default Home;
