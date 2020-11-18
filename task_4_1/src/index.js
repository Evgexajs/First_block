import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import { AppClass, AppFunction } from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
    <AppFunction />
  </React.StrictMode>,
  document.getElementById('root')
);