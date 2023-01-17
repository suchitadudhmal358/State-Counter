import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  // var count = 0;
  // const resetCount = () => (count = 0);
  // const increaseCount = () => (count = count + 1);
  // const decCount = () => (count -= 1);

  return (
    <div className="App">
      <header>
        <h1>Counter app using State/ hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      {/* <button onClick={resetCount}>Reset Counter</button>
      <button onClick={increaseCount}>Increase Counter</button>
      <button onClick={decCount}>Decrase Counter</button> */}

      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increase Counter
      </button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrease Counter
      </button>
    </div>
  );
};

export default App;
