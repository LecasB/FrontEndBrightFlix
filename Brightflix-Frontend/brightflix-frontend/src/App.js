import React from "react";
import Homepage from "./pages/homepage";
import "./scss/_base.scss";
import Banner from "./components/Banner";

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
