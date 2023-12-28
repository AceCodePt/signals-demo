import count from "./signal";

const Reset = () => {
  console.log("render reset");
  const reset = () => {
    count.value = 0;
  };
  return <button onClick={reset}>Reset</button>;
};

export default Reset;
