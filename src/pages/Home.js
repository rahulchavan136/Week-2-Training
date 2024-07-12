import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
 import MyRoutes from '../components/MyRoutes';
 
const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} handleClose={toggleSidebar} />
      <MyRoutes />
      <Footer />
    </Router>
  );
};

export default Home;
