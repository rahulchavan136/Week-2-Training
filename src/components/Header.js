import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
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
            <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link  as={NavLink} to="/about">About</Nav.Link>

            <NavDropdown title="Task Lists" id="basic-nav-dropdown">
 
              <NavDropdown.Item as={NavLink} to="parentComponent">ParentToChild</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="loginform"> LoginForm</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="buttoncomponent">ButtonComponent</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="appleimage">Apple Image moving</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="book">Book Child-to-Parent</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="login">Conditional Rendering</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="anime">Anime-Drag-and-Drop</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="fetchbookapi">Fetch BOOK API </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="tempconvertor">TempConverter </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="hoverBox">HoverBox </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="usereducer">usereducer </NavDropdown.Item>

              <NavDropdown.Divider />
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
