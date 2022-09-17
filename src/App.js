import React from 'react';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <div className="App-door">
        <p>
          this is the door
        </p>
      </div>
      <div className="App-panel">
          <Buttons />
      </div>
      
    </div>
  );
}

export default App;
