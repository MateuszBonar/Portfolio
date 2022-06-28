import React from 'react';

import { Banner, Nav, Skills, About, Footer, Email, Projects } from 'Components';

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
      <Footer />
    </div>
  );
}

export default App;
