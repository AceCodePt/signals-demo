import React from "react";
import count from "./signal";

const Counter = () => {
  // Accessing .value in a component automatically re-renders when it changes:
  const increment = () => {
    count.value++;
  };
  // You can also pass a callback to the setter
  const decrement = () => {
    count.value--;
  };
  console.log("render counter");

  return (
    <div>
      <p>
        Count: <>{count}</>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
