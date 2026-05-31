import React from 'react';
import '../styles/experience.css';

export default function Experience() {
  return (
    <div className="page-container">
      <div className="experience-section">
        <h1>Experience</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jan 2024 - Present</div>
              <div className="timeline-title">Junior Full Stack Developer</div>
              <div className="timeline-company">Tech Startup Inc.</div>
              <div className="timeline-description">
                Developing full-stack web applications using React and Node.js. Implemented responsive UIs and RESTful APIs. Collaborated with cross-functional teams to deliver features on schedule. Improved app performance by 40% through code optimization.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Sep 2023 - Dec 2023</div>
              <div className="timeline-title">Frontend Developer Intern</div>
              <div className="timeline-company">Digital Solutions Co.</div>
              <div className="timeline-description">
                Built interactive dashboard components with React and Tailwind CSS. Worked on bug fixes and feature enhancements. Learned industry best practices for code organization and testing. Assisted in migrating legacy code to modern frameworks.
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">Jun 2023 - Aug 2023</div>
              <div className="timeline-title">Web Development Bootcamp</div>
              <div className="timeline-company">Code Academy</div>
              <div className="timeline-description">
                Intensive 3-month program covering frontend, backend, and database technologies. Built 5+ full-stack projects. Mastered React, Node.js, and Python/Flask. Graduated with distinction and strong portfolio foundation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}