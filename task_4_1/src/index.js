import React from 'react';
import App from './App';
import ReactDom from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { asyncIncrement, decrement, increment } from './redux/actions'
import {rootReducer} from './redux/rootReducer'

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const counter = document.querySelector(".number")
const addBtn = document.querySelector(".counter__add")
const subBtn = document.querySelector(".counter__sub")
const asyncBtn = document.querySelector(".counter__async")

const store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk)
  );

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})


store.subscribe (() => {
  const state = store.getState()
  counter.textContent = state;
})

store.dispatch( {type: 'INIT_APLICATION'})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})
