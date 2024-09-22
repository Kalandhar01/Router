import React from 'react';
import Nav from './component/Nav';
import About from './router/About';
import Blog from './router/Blog';
import Contact from './router/Contact';
import LandingPage from './router/LandingPage';
import Why from './router/Why';
import Skill from './router/Skill';

const App = () => {
  return (
    <>
   
      <Nav />

  
      <div id="landing-page">
        <LandingPage />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="why">
        <Why />
      </div>

      <div id="skills">
        <Skill />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div id="blog">
        <Blog />
      </div>
    </>
  );
};

export default App;
