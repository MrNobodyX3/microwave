import React from 'react';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <div className="App-door">
      </div>
      <div className="App-panel">
          <Display />
      </div>
    </div>
  );
}

export default App;
