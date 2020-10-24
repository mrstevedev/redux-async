import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// Import action
import { increment, decrement, getData } from "./actions";

function App() {
  // Get counter state from store
  const content = useSelector((state) => state);
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* <button onClick={ () => dispatch(getData()) }>Get users</button> */}

      { content.fetch.data.name }

      {isLogged ? <h4>Value information I shouldn't see</h4> : ""}
    </div>
  );
}

export default App;
