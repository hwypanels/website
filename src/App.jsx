import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServicesGrid from './components/ServicesGrid';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServicesGrid />
      <ContactSection />
    </div>
  );
}

export default App;