// src/App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAction, decrementAction } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  return (
    <div>
      <h1>Redux Middleware Example</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
