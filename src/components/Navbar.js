import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../sass/navbar.scss";

const NavBar = ({ isLoggedin, user, logoutUser }) => {
  return (
    <Navbar
      className="sticky-top"
      collapseOnSelect
      expand="md"
      variant="dark"
      id="navbar"
    >
      <Container id="cont">
        <Navbar.Brand href="#home" id="brand">
          BonStay
        </Navbar.Brand>
        {isLoggedin && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/hotels">
                  Hotels
                </Nav.Link>
                <Nav.Link as={Link} to="/bookings">
                  Bookings
                </Nav.Link>
                <Button id="logout" onClick={logoutUser}>
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
