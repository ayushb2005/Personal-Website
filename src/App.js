import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
//pages
import MainPage from './components/MainPage';
import React from 'react';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
    </Router>
  );
}

export default App;
