import React, { useState } from "react";
import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png"
const AppNavbar = () => {


    return (
        <>
            <Navbar className="justify-content-center" activeKey="/home">
                <Container >


                    <Nav className="justify-content-center"  id="navbar"     activeKey="/home">
                        {/* {Auth.loggedIn() ? (
                            <>
                                <Button
                                    variant="secondary"
                                    onClick={logout}
                                    style={{ backgroundColor: "#F7C04A" }}
                                    className="btn"
                                >
                                    Logout
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={viewDecks}
                                    style={{ backgroundColor: "#F7C04A" }}
                                    className="btn"
                                >
                                    Projects
                                </Button>
                            </>
                        ) : ( */}
                            {/* <> */}
                            <Nav.Item >
                                <Nav.Link className="tab " href="#home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link className="tab" href="#about">About Us</Nav.Link>  
                                </Nav.Item> 
                                <Nav.Item>             
                                <Nav.Link className="tab" href="#projects">Projects</Nav.Link>  
                                </Nav.Item>
                                <Navbar.Brand href="/" id="title" className="company">
                        <img className="navbar-logo" src={logo} alt="logo" />
                        {/* Calling Card */}
                    </Navbar.Brand>  
                    <Nav.Item>            
                                <Nav.Link className="tab" href="#contact" >Contact Us</Nav.Link>
                                </Nav.Item>
                                <Navbar.Brand href="/" id="title">
            <img className="social-logo" src={youtube} alt="youtube" />
            
          </Navbar.Brand>
          <Navbar.Brand href="/" id="title">
            <img className="social-logo" src={twitter} alt="twitter logo" />

          </Navbar.Brand>
                            {/* </> */}
                        {/* )} */}
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