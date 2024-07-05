import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage.js";
import InsertPage from "./pages/videoInsertPage.js";
import Homepage from "./pages/homepage.jsx";
import FavoritesPage from "./pages/favoritespage.jsx";
import Films from "./pages/films.jsx";
import Series from "./pages/series.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/insert" element={<InsertPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Favorites" element={<FavoritesPage />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
