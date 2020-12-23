import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

export default function RegisterForm() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter:
        {counter}
      </h1>
      <button type="button" onClick={() => dispatch(increment(5))}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement(1))}>
        -
      </button>
      {isLogged && <h3>I should not see</h3>}
    </div>
  );
}
