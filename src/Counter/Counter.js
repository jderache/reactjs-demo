import './Counter.css';
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
   <>
      <div>
        Compte : <span className={count > 5 ? 'count-too-high' : ''}>{count}</span>
      </div>
      <div className="button-group">
        <button onClick={increment}>+</button>
        <button disabled={count === 0} onClick={decrement}>-</button>
      </div>
      {count > 5 ? (<div id="warning-count-too-high" className="warning-message">Le compteur est trop élevé.</div>) : null}
    </>
  );
}

export default Counter;
