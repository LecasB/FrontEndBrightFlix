import React from "react";
import Homepage from "./pages/homepage";
import "./scss/_base.scss"; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
