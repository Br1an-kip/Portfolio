import React from 'react';
import '../styles/about-me.css';

export default function AboutMe() {
  return (
    <div className="page-container">
      <div className="about-section">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hey! I'm a <span className="about-highlight">junior fullstack developer</span> passionate about building web applications that solve real problems. With a strong foundation in both frontend and backend development, I love the challenge of creating seamless user experiences backed by robust server-side logic.
          </p>
          <p>
            I specialize in working with <span className="about-highlight">React</span> for dynamic interfaces, <span className="about-highlight">Node.js</span> for scalable backends, and <span className="about-highlight">Python/Flask</span> for rapid prototyping and data-driven applications. Whether it's crafting an intuitive UI or architecting a reliable API, I'm driven by clean code and continuous learning.
          </p>
          <p>
            Outside of coding, I'm always exploring new technologies, contributing to open-source projects, and diving deeper into web performance optimization. Let's build something amazing together!
          </p>
        </div>
        <div className="about-image">👨‍💻</div>
      </div>
    </div>
  );
}