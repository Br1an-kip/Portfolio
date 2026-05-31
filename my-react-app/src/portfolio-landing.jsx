import React, { useState, useEffect } from 'react';

export default function PortfolioLanding() {
  const [greeting, setGreeting] = useState('');
  const [showName, setShowName] = useState(false);
  const [nameFadeOut, setNameFadeOut] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Set greeting based on current time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  // Sequence the animations
  useEffect(() => {
    // Show name after a brief delay
    const nameTimer = setTimeout(() => setShowName(true), 800);

    // Fade out name after 3 seconds
    const fadeOutTimer = setTimeout(() => setNameFadeOut(true), 3800);

    // Show button after name fades out
    const buttonTimer = setTimeout(() => setShowButton(true), 4800);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background: #0f0f0f;
          color: #ffffff;
          overflow: hidden;
        }

        .portfolio-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #000000 0%, #0a1f3d 100%);
          position: relative;
          overflow: hidden;
        }

        .portfolio-container::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .portfolio-container::after {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(100, 200, 255, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -50px;
          left: -50px;
          pointer-events: none;
        }

        .greeting {
          font-size: 1.2rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: #888888;
          text-transform: uppercase;
          margin-bottom: 40px;
          animation: fadeInGreeting 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInGreeting {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .name-container {
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .name-text {
          font-family: 'Playfair Display', serif;
          font-size: 4rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: -2px;
          line-height: 1.3;
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-content: center;
        }

        .name-line {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .word {
          opacity: 0;
          display: inline-block;
          animation: wordFadeIn 0.6s ease-out forwards;
        }

        @keyframes wordFadeIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .name-container.fade-out .word {
          animation: wordFadeOut 0.8s ease-out forwards;
        }

        @keyframes wordFadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        .button-wrapper {
          margin-top: 80px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .portfolio-button {
          padding: 16px 48px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          color: #0f0f0f;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .portfolio-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .portfolio-button:hover::before {
          left: 100%;
        }

        .portfolio-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 60px rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
        }

        .portfolio-button:active {
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .name-text {
            font-size: 2.5rem;
            gap: 12px;
          }

          .greeting {
            font-size: 1rem;
          }

          .portfolio-button {
            padding: 14px 36px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="greeting">{greeting}</div>

      <div className={`name-container ${nameFadeOut ? 'fade-out' : ''}`}>
        <div className="name-text">
          <div className="name-line">
            <span className="word" style={{ animationDelay: showName ? '0s' : '-0.6s' }}>My</span>
            <span className="word" style={{ animationDelay: showName ? '0.15s' : '-0.45s' }}>Name</span>
          </div>
          <div className="name-line">
            <span className="word" style={{ animationDelay: showName ? '0.3s' : '-0.3s' }}>is</span>
          </div>
          <div className="name-line">
            <span className="word" style={{ animationDelay: showName ? '0.45s' : '-0.15s' }}>John</span>
            <span className="word" style={{ animationDelay: showName ? '0.6s' : '0s' }}>Doe</span>
          </div>
        </div>
      </div>

      <div className={`button-wrapper ${showButton ? 'visible' : ''}`}>
        <button className="portfolio-button">
          Click to View Portfolio
        </button>
      </div>
    </div>
  );
}
