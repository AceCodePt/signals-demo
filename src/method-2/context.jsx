import { createContext, useState } from "react";

const CounterContext = createContext({
  count: 0,
  setCount: () => {},
});

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);
  console.log("render context");
  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        {props.children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterContext;
