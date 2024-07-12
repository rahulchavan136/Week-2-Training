import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Cap = () => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CAP,
    item: { type: 'cap' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="cap-child" style={{ opacity: isDragging ? 0.5 : 1 }}>
      Cap
    </div>
  );
};

export default Cap;
