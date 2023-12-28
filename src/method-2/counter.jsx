import { useContext } from "react";
import CounterContext from "./context";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  const increment = () => setCount(count + 1);
  // You can also pass a callback to the setter
  const decrement = () => setCount((currentCount) => currentCount - 1);
  console.log("render counter");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
