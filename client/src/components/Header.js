import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png"

const AppNavbar = () => {
    return (
        <>
            <Navbar className="navbar"   activeKey="/home" id="home" sticky="top">
                <Container >


                    <Nav   id="navbar" activeKey="/home">
                    
                            <Nav.Item >
                                <Nav.Link className="tab " href="#home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link className="tab" href="#About">About Us</Nav.Link>  
                                </Nav.Item> 
                                <Nav.Item>             
                                <Nav.Link className="tab" href="#Projects">Projects</Nav.Link>  
                                </Nav.Item>
                                <Navbar.Brand href="/" id="title" className="company">
                        <img className="navbar-logo" src={logo} alt="logo" />
                    </Navbar.Brand>  
                    <Nav.Item>            
                                <Nav.Link className="tab" href="#Contact" >Contact Us</Nav.Link>
                                </Nav.Item>
                                <Navbar.Brand href="/" id="title">
            <img className="social-logo" src={youtube} alt="youtube logo" />
            
          </Navbar.Brand>
          <Navbar.Brand href="/" id="title">
           <Link to='https://twitter.com/callingcardllc?s=21'> <img className="social-logo" src={twitter} alt="twitter logo" /></Link>

          </Navbar.Brand>
                           
                    </Nav>
                </Container>
            </Navbar>
            {/* login modal */}
            {/* <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modal-text" id="login-modal">
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> */}
                    {/* pass close model */}
                    {/* <LoginForm handleModalClose={() => setShow(false)} />
                </Modal.Body>
            </Modal> */}
            {/* create account modal */}
            {/* <Modal
                show={showLogin}
                onHide={handleCloseLogin}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modal-text" id="signup-modal">
                        Create an Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm handleModalClose={() => setShowLogin(false)} />
                </Modal.Body>
            </Modal> */}
        </>
    );
};

export default AppNavbar; 