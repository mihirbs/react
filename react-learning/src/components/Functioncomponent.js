import React, { useState } from "react";

function MyFunctionComponent() {
  const [count, setCount] = useState(0); // useState hook for state management

  const increment = () => {
    setCount(count + 1); // Update state
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyFunctionComponent;
