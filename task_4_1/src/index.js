import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import AppFunction from './App';
import AppClass from './AppClass';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
    <AppFunction />
  </React.StrictMode>,
  document.getElementById('root')
);