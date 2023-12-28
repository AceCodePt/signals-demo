import { useState } from "react";
import Counter from "./counter";
import Reset from "./reset";

const Method1 = () => {
  const [count, setCount] = useState(0);
  console.log("render method1");
  return (
    <>
      <Counter count={count} setCount={setCount} />
      <br />
      <Reset setCount={setCount} />
    </>
  );
};

export default Method1;
