import React, { Component, useState } from 'react';
import './style/style.css';

export class AppClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render () {
    return (
      <div className="counters">
        <div className="counters__text">
          <h5>Counter: <span className="number">{this.state.counter}</span> </h5>
        </div>
        <button onClick={this.increment} className="counters__add">+</button>
        <button onClick={this.decrement} className="counters__sub">-</button>
      </div>
    );
  }
}

export function AppFunction () {
  const [count, setCount] = useState(0);

  const increment = () => {
      setCount(count + 1);
  }

  const decrement = () => {
      setCount(count - 1);
  }
  return (
      <div className="counters">
        <div className="counters__text">
          <h5>Counter: <span className="number">{count}</span> </h5>
        </div>
        <button onClick={increment} className="counters__add">+</button>
        <button onClick={decrement} className="counters__sub">-</button>
      </div>
    );
}
