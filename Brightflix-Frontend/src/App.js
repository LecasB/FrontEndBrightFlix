import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
