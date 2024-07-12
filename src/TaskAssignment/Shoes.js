import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const Shoes = () => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SHOES,
    item: { type: 'shoes' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="shoes-child" style={{ opacity: isDragging ? 0.5 : 1 }}>
      Shoes
    </div>
  );
};

export default Shoes;
