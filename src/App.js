// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import LegalStructures from './components/LegalStructures';
import DynamicForm from './components/DynamicForm';
import MapPrototype from './components/MapPrototype'; // Import the map component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal-structures" element={<LegalStructures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lead-form" element={<DynamicForm />} />
          <Route path="/map-prototype" element={<MapPrototype />} /> {/* New map route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
