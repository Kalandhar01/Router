import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav';
import About from './router/About';
import Blog from './router/Blog';
import Contact from './router/Contact';
import LandingPage from './router/LandingPage';

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
