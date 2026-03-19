import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Budget from './components/Budget';
import Methodology from './components/Methodology';
import Pillars from './components/Pillars';
import Venues from './components/Venues';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Budget />
      <Methodology />
      <Pillars />
      <Venues />
      <Conclusion />
      <Footer />
    </>
  );
}

export default App;
