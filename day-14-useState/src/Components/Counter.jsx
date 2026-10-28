import React, { useState } from "react";

import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);

  const incrementNum = () => {
    setCount(count + 1);
  };

  const decrementNum = () => {
    setCount(count - 1);
  };

  const resetNum = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter">
        <p>Count:{count}</p>

        <div className="buttons">
          <button onClick={incrementNum}>Increment number</button>

          <button onClick={decrementNum}>Decrement number</button>

          <button onClick={resetNum}>Reset number</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
