const Reset = ({ setCount }) => {
  console.log("render reset");
  const reset = () => {
    setCount(0);
  };
  return <button onClick={reset}>Reset</button>;
};

export default Reset;
