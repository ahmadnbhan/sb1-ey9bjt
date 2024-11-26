import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;