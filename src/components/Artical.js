import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ParentComponent from '../classComponent/ParentComponet';
import AppleBasket from '../classComponent/AppleBasket';
import LoginForm from '../classComponent/LoginForm';
import ButtonComponent from '../classComponent/ButtonComponent';
import AppleImage from '../FunctionalComponent/AppleImage';
import Book from '../FunctionalComponent/Book';


const Artical = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Routes>
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />

            <Route path="/parentComponent" element={<ParentComponent />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/applebasket" element={<AppleBasket />} />
            <Route path="/buttoncomponent" element={<ButtonComponent />} />
            <Route path="/appleimage" element={<AppleImage />} />
            <Route path="/book" element={<Book />} />


            <Route path="/" element={<div><h2>Dashboard</h2><p>This is the Dashboard area.</p></div>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Artical;
