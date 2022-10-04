import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
