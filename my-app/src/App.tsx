import React from 'react';

import { Banner, Nav, Skills, About, Contact, Email, Projects } from 'Components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Email />
      <Contact />
    </div>
  );
}

export default App;
