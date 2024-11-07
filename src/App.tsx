import "./styles.css";
import IMAGE from "./react.png";
import LOGO from "./github.svg";
import { Counter } from "./Counter";

const App = () => {
  const num = 1;
  return (
    <>
      <h1>Hello React Typescript webpack starter project {process.env.name}</h1>
      <img src={IMAGE} alt="React logo" width={500} height={300} />
      <img src={LOGO} alt="React logo" width={500} height={300} />
      <Counter />
    </>
  );
};

export default App;
