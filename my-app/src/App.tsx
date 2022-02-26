import React from 'react';

import { Banner, Nav, Skills, About, Contact } from 'Components';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
