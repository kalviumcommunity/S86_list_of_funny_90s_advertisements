import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CardPage from './components/AdCardPage'; // corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Home page */}
        <Route path="/cards" element={<CardPage />} /> {/* Card page */}
      </Routes>
    </Router>
  );
}

export default App;
