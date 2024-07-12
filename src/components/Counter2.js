import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <Button variant='danger' onClick={increment}>Increment</Button>
      <Button variant='danger' onClick={decrement}>Decrement</Button>
    </div>
  );
}

export default Counter2;
