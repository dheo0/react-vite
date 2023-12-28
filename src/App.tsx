import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CheckBox from "./components/CheckBox";

function App() {
  const [count, setCount] = useState(0);
  const boxes = [
    { id: "a", checked: false, title: "AAAA" },
    { id: "b", checked: true, title: "BBBB" },
    { id: "c", checked: false, title: "CCCC" },
  ];
  const onCheckBoxhandler = (value: boolean, id: string) => {
    console.log(value, id);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      {boxes &&
        boxes.map((item, key) => <CheckBox id={item.id} checked={item.checked} label={item.title} onChange={(v, i) => onCheckBoxhandler(v, i)} key={key} />)}
    </>
  );
}

export default App;
