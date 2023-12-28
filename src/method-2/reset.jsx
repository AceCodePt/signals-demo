import { useContext } from "react";
import CounterContext from "./context";

const Reset = () => {
  const { setCount } = useContext(CounterContext);
  console.log("render reset");
  const reset = () => {
    setCount(0);
  };
  return <button onClick={reset}>Reset</button>;
};

export default Reset;
