import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Jacket = () => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.JACKET,
    item: { type: 'jacket' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="jacket-child" style={{ opacity: isDragging ? 0.5 : 1 }}>
      Jacket
    </div>
  );
};

export default Jacket;
