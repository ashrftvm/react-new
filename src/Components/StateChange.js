import React, { useState } from "react";

function StateChange() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default StateChange;
