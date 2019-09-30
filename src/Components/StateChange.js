import React, { useState } from "react";

function StateChange() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };
  return (
    <div>
      <h1 className={isRed ? "red" : ""}>Change my color to Red</h1>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default StateChange;
