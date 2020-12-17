import { useReducer } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import './CounterApp.css';

const initialState = { counter: 0 };

const slice = createSlice({
  name: 'counter',
  reducers:{
    INCREMENT: (state) => {
      state.counter += 1;
    },
    DECREMENT: (state) => {
      state.counter -= 1;
    },
    RESET: (state) => {
      state.counter = 0;
    },
  },
  initialState
});

const { actions, reducer } = slice;

function CounterApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-app">
      <p className="counter">Counter: { state.counter }</p>
      <ul className="buttons">
        <li>
          <button onClick={ () => dispatch(actions.INCREMENT) }>+</button>
        </li>
        <li>
          <button onClick={ () => dispatch(actions.DECREMENT) }>-</button>
        </li>
        <li>
          <button onClick={ () => dispatch(actions.RESET) }>reset</button>
        </li>
      </ul>
    </div>
  );
}

export default CounterApp;
