import React from 'react';
import './style/style.css';
import CounterFunction from './Counter.jsx';
import CounterClass from './CounterClass.jsx';

function App() {
  return (
    <div className="container">
        <CounterFunction />
        <CounterClass />
    </div>
  );
}

export default App;
