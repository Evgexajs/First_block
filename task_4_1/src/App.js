import React, { Component } from 'react';
import './style/style.css';

class App extends Component {
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

export default App;
