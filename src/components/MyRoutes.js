import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'; 
import ParentComponent from '../classComponent/ParentComponet';
import AppleBasket from '../classComponent/AppleBasket';
import LoginForm from '../classComponent/LoginForm';
import ButtonComponent from '../classComponent/ButtonComponent';
import AppleImage from '../FunctionalComponent/AppleImage';
import Book from '../FunctionalComponent/Book';
import Login from '../FunctionalComponent/Login';
import Dashboard from '../pages/Dashboard';
import ParentComponentAnime from '../TaskAssignment/ParentComponentAnime';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BookCard from '../FunctionalComponent/BookCard';
import TempConverter from '../FunctionalComponent/TempConvertor';
import HoverBox from './HoverBox';
import { StyleRoot } from 'radium';
import { About } from '../pages/About';
import Section1 from '../pages/Section1';
import Section2 from '../pages/Section2';
import Section3 from '../pages/Section3';
import MyEmployeeReducer from '../features/MyEmployeeReducer';
 

const MyRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthenticated, "isAuthenticated");

  return (
    <Container fluid>
      <Row>
        <Col>
          <Routes>
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />

            <Route path="/parentComponent" element={<ParentComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/applebasket" element={<AppleBasket />} />
            <Route path="/buttoncomponent" element={<ButtonComponent />} />
            <Route path="/appleimage" element={<AppleImage />} />
            <Route path="/book" element={<Book />} />
            <Route path="/fetchbookapi" element={<BookCard />} />
            <Route path="/tempconvertor" element={<TempConverter />} />
            <Route path="/hoverBox" element={<StyleRoot><HoverBox /></StyleRoot>} />
            <Route path="/usereducer" element={<MyEmployeeReducer />} />




            <Route path="/anime" element={
              <DndProvider backend={HTML5Backend}>
              <ParentComponentAnime />
            </DndProvider>
            } />

            
            <Route path="/login" element={!isAuthenticated ? (
                <Login handleLogin={setIsAuthenticated} />
              ) : (
                <Dashboard handleLogout={setIsAuthenticated} />
              )
            } />
            <Route path="/" element={<div className='text-center mt-5 fw-bold'><h1>Dashboard Page</h1><p>This is the Dashboard area.</p></div>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default MyRoutes;
