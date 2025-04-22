import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CardPage from './components/AdCardPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserEntityFilter from './components/UserEntityFilter.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/sqltest" element={<UserEntityFilter/>} />
      </Routes>
    </Router>
  );
}

export default App;
