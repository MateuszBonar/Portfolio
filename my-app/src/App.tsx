import React from 'react';
import './App.css';
import { Banner, Nav, Skills, About, Contact } from 'Components';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Nav />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
