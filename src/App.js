import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const sayHello = () => {
    console.log("Hello you invoked me!!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={sayHello}>Submit</button>
      </header>
    </div>
  );
}

export default App;
