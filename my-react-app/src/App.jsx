import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioLanding from './pages/PortfolioLanding';
import PortfolioMain from './components/PortfolioMain';
import './styles/index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/portfolio" element={<PortfolioMain />} />
      </Routes>
    </Router>
  );
}