import React, { Component } from 'react';

class Counter extends Component {
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

export default Counter;
