import React from 'react';
import '../styles/skills.css';

export default function Skills() {
  return (
    <div className="page-container">
      <div className="skills-section">
        <h1>Skills & Technologies</h1>
        
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>Building responsive and interactive user interfaces with modern React patterns and best practices.</p>
          <div className="tech-list">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">CSS/Tailwind</span>
            <span className="tech-tag">HTML5</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Developing scalable server-side applications with Node.js and Python for robust API development.</p>
          <div className="tech-list">
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Flask</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database & Tools</h3>
          <p>Managing data efficiently and using modern development tools for collaboration and deployment.</p>
          <div className="tech-list">
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">REST APIs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
