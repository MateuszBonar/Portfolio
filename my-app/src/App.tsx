import React from 'react';

import {Banner, Nav, Skills, About, Contact, Email} from 'Components';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Banner/>
            <Nav/>
            <About/>
            <Skills/>
            <Email/>
            <Contact/>
        </div>
    );
}

export default App;
