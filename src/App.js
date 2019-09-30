import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SayHello from "./Components/SayHello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SayHello />
      </header>
    </div>
  );
}

export default App;
