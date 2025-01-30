// Enable react-router-dom functionality
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Team from './components/Team';
import Services from './components/Services';
import Estimates from './components/Estimates';
import Contact from './components/Contact';

// Import styling for App.css
import './App.css';

// Website
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/services' element={<Services />} />
          <Route path='/estimates' element={<Estimates />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
