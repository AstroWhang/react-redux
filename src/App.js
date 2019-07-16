import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { increment, decrement, toggleTrue } from './action';


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(toggleTrue())}>Log In</button>
      {isLogged ? <h3>You're logged in!</h3> : <h3>You're NOT logged in!</h3>}
    </div>
  );
}

export default App;
