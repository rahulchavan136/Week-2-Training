import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear()
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">
        <Navbar.Text>@Copyrights {year} Rahul Sureshrao Chavan</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
