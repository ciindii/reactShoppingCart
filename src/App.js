import React from 'react';
// import Player from './components/counter';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <Counter />
    </div>
  )
}
class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0
    };
  }

  increnmentScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      }
    });
  }

  decrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score - 1
      }
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="" onClick={this.increnmentScore}>+</button>
        <span className="">{this.state.score}</span>
        <button className="" onClick={this.decrementScore}>-</button>
      </div>
    );
  }
}

class App extends React.Component {

  state = {
    players: [
     {
      name: "Guil",
      score: 50,
      id: 1
     },
      {
      name: "Cindy",
      score: 30,
      id: 2
     },
      {
      name: "Ashley",
      score: 10,
      id: 3
     },
      {
      name: "James",
      score: 40,
      id: 4
     }
    ]
  };
  render(){
    return (
     <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
      {/* players list */}
      {this.state.players.map( player =>
          <Player
            name={player.name}
            id={player.id}
           />
      )}
      </div>
    );
  }
}

export default App;
