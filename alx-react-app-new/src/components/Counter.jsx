// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // Initialize state with count starting at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Display the current count */}
      <p>Current Count: {count}</p>
      
      {/* Increment button */}
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        Increment
      </button>
      
      {/* Decrement button */}
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        Decrement
      </button>
      
      {/* Reset button */}
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
