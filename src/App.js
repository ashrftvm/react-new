import React from "react";

import "./App.css";

import Tweet from "./Components/Tweet";
import StateChange from "./Components/StateChange";

function App() {
  return (
    <div className="App">
      <StateChange />
      <header className="App-header">
        <Tweet name="Asif" tweets="Hi hello, this is the first one" likes="2" />
        <Tweet
          name="Sha"
          tweets="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          likes="21"
        />
        <Tweet
          name="Ali"
          tweets="Aspernatur amet earum quisquam dolor architecto ab"
          likes="12"
        />
        <Tweet
          name="Cool"
          tweets="ad eos, fugiat itaque autem asperiores aliquam, commodi "
          likes="25"
        />
      </header>
    </div>
  );
}

export default App;
