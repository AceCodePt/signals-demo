import { CounterContextProvider } from "./context";
import Counter from "./counter";
import Reset from "./reset";

const Method2 = () => {
  console.log("render method2");
  return (
    <>
      <CounterContextProvider>
        <Counter />
        <br />
        <Reset />
      </CounterContextProvider>
    </>
  );
};

export default Method2;
