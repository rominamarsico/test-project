import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Hello } from "./Hello";
import { Card } from "./Card/Card";
import { MultiplyOld, HooksOld } from "./Hooks/Hooks-old";
import { Hooks } from "./Hooks/Hooks";

function App() {
  const [count, setCount] = useState(0);

  // commentar

  return (
    <>
      {/* commentar */}
      <MultiplyOld />

      <Card title="React" link="https://react.dev/" logo={reactLogo} />
      <Card title="Vite" link="https://vitejs.dev/" logo={viteLogo} />

      <Hello name={"World"} frage={"wie gehts?"} />
      <Hello name={"Earth"} />
      <Hello name={"Saturn"} />
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
