import React from 'react';

const CardRed = ({ count }) => (
  <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
    <p>Count - {count}</p>
  </div>
);

const CardGreen = ({ count }) => (
  <div style={{ backgroundColor: 'green', padding: '20px', color: 'white' }}>
    <p>Count - {count}</p>
  </div>
);

export { CardRed, CardGreen };
