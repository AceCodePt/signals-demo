import Counter from "./counter";
import Reset from "./reset";

const Signals = () => {
  console.log("render signals");
  return (
    <>
      <Counter />
      <br />
      <Reset />
    </>
  );
};

export default Signals;
