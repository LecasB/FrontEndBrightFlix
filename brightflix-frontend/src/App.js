import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage.js';
import Register from './pages/registerPage.js';
import InsertPage from './pages/videoInsertPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/insert" element={<InsertPage />} />
      </Routes>
    </Router>
  );
}

export default App;