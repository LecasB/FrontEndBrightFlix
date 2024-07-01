import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage.js';
import InsertPage from './pages/videoInsertPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/f0689ddfbfdd838462d1d63171ee01a9.txt" 
          element={
            <iframe 
              src="/f0689ddfbfdd838462d1d63171ee01a9.txt" 
              style={{ width: '100%', height: '100vh', border: 'none' }} 
            />
          } 
        />
        <Route path="/insert" element={<InsertPage />} />
      </Routes>
    </Router>
  );
}

export default App;