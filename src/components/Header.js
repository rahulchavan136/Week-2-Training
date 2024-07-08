import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Button variant="outline-light" style={{color:"black"}} onClick={toggleSidebar} className="me-2">
          ☰
        </Button>
        <Navbar.Brand as={NavLink} to="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={NavLink} to="home">Home</Nav.Link>
            <Nav.Link  as={NavLink} to="about">About</Nav.Link>
            <Nav.Link  as={NavLink} to="parentComponent">Child-to-Parent</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
