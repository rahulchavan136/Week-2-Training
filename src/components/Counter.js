import React, { useState } from 'react';

const Counter = (WrappedComponent) => {

  const WithCounterComponent = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div className='text-center mt-5'>
        <WrappedComponent count={count} {...props} />
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <br />
      </div>
    );
  };

  return WithCounterComponent;
};

export default Counter;
