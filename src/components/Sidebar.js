import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={NavLink} to="/section1" onClick={handleClose}>Section 1</Nav.Link>
            <Nav.Link as={NavLink} to="/section2" onClick={handleClose}>Section 2</Nav.Link>
            <Nav.Link as={NavLink} to="/section3" onClick={handleClose}>Section 3</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
