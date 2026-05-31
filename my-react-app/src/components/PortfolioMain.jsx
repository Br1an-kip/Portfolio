import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';

export default function PortfolioMain() {
  const [currentSection, setCurrentSection] = useState('about');

  return (
    <div className="portfolio-app">
      <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {currentSection === 'about' && <AboutMe />}
      {currentSection === 'skills' && <Skills />}
      {currentSection === 'experience' && <Experience />}
    </div>
  );
}