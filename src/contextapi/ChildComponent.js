import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const ChildComponent = () => {
  const { color, changeColor } = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: color, padding: '20px', borderRadius: '5px' }}>
      <h2>Child Component</h2>
      <p>The background color is {color}</p>
      <button onClick={() => changeColor('lightblue')} style={{ margin: '5px' }}>Change to Light Blue</button>
      <button onClick={() => changeColor('lightgreen')} style={{ margin: '5px' }}>Change to Light Green</button>
      <button onClick={() => changeColor('lightcoral')} style={{ margin: '5px' }}>Change to Light Coral</button>
    </div>
  );
};

export default ChildComponent;
