import React, { useState } from "react";

import "./Counter.css";

function Counter() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  const incrementNum = () => {
    setCount((count) => count + step);
  };

  const decrementNum = () => {
    setCount((count) => count - step);
  };

  const resetNum = () => {
    setCount(0);
  };

  const stepNum = (e) => {
    setStep( Number(e.target.value))
  };

  return (
    <>
      <div className="counter">
        <p>Count:{count}</p>

        <div className="buttons">
          <button onClick={incrementNum}>Increment number</button>
          <button onClick={decrementNum}>Decrement number</button>
          <button onClick={resetNum}>Reset number</button>

          <select value={step} onChange={stepNum}>
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          
        </div>
      </div>
    </>
  );
}

export default Counter;
