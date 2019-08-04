import React from 'react';
import Counter from './components/counter';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header>
          <h1>game scoreboard</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
