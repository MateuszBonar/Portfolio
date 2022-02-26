import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Banner/>
        <Nav/>
        <Skills/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
