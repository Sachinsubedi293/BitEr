import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TermsAndConditions from './pages/TermsandCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
