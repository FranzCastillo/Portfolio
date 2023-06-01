import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Navigation from "./components/Navigation/Navigation";
import './styles/App.scss'

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
