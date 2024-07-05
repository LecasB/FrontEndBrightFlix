import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.js";
import InsertPage from "./pages/videoInsertPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/insert" element={<InsertPage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
