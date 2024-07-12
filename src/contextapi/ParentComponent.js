import React from 'react';
import { ColorProvider } from './ColorContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <ColorProvider>
      <div style={{ padding: '20px' }}>
        <h1>Parent Component</h1>
        <ChildComponent />
      </div>
    </ColorProvider>
  );
};

export default ParentComponent;
