import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [timeInput, setTimeInput] = useState(0);
  return (
    <div className="App">
      <div className="App-door"></div>
      <div className="App-panel">
        <Display current={timeInput} />
        <Buttons click={setTimeInput} current={timeInput} />
      </div>
    </div>
  );
}

export default App;
