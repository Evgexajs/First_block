import React, { useState } from 'react';
import './style/style.css';

function AppFunction () {
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

export default AppFunction;
