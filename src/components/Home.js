import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
 import Artical from './Artical';
 
const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} handleClose={toggleSidebar} />
      <Artical />
      <Footer />
    </Router>
  );
};

export default Home;
