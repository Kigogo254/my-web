import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Biography from './components/Biography';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/bio" element={<Biography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
