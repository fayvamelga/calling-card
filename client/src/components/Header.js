import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
// import NavDiv from "./HeaderBg";

const AppNavbar = () => {
  return (
    <>
      {/* <NavDiv/> */}
      <div className="navDiv">
        <Navbar className="navbar" activeKey="/home" id="home" sticky="top">
          <Container>
            <Nav id="navbar" activeKey="/home">
              <Nav.Item>
                <Nav.Link className="tab " href="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab" href="#About">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab" href="#Projects">
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Navbar.Brand href="/"  >
                <img className="navbar-logo" src={logo} alt="logo" />
              </Navbar.Brand>
              <Nav.Item>
                <Nav.Link className="tab" href="#Podcasts">
                  Podcasts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab" href="#Archives">
                  Archives
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab" href="#Contact">
                  Contact 
                </Nav.Link>
              </Nav.Item>
              {/* <Navbar.Brand href="/" id="title">
            <img className="social-logo" src={youtube} alt="youtube logo" />
            
          </Navbar.Brand>
          <Navbar.Brand href="/" id="title">
           <Link to='https://twitter.com/callingcardllc?s=21'> <img className="social-logo" src={twitter} alt="twitter logo" /></Link>

          </Navbar.Brand> */}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default AppNavbar;
