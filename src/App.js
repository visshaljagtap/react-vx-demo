import React, { Component } from 'react';
import BarGraph from './BarGraph';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><b>React and vx Demo Example</b></div>
          <br/>
          <BarGraph />
        </header>
      </div>
    );
  }
}

export default App;
