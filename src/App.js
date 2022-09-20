import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(0);
  return (
    <div className="App">
      <div className="App-door"></div>
      <div className="App-panel">
        <Display show={display} />
        <Buttons click={setDisplay} current={display} />
      </div>
    </div>
  );
}

export default App;
