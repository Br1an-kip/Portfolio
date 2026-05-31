import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import '../styles/nav.css';

export default function Nav({ currentSection, setCurrentSection }) {
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <button className="back-button" onClick={() => navigate('/')}>
          <ChevronLeft size={20} />
          Back
        </button>
        <div className="logo">BK</div>
      </div>
      <ul className="nav-links">
        <li 
          className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => setCurrentSection('about')}
        >
          About Me
        </li>
        <li 
          className={`nav-link ${currentSection === 'skills' ? 'active' : ''}`}
          onClick={() => setCurrentSection('skills')}
        >
          Skills
        </li>
        <li 
          className={`nav-link ${currentSection === 'experience' ? 'active' : ''}`}
          onClick={() => setCurrentSection('experience')}
        >
          Experience
        </li>
      </ul>
    </nav>
  );
}