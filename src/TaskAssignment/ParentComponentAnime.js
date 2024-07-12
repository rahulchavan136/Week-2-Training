import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Cap from './Cap';
import Jacket from './Jacket';
import Shoes from './Shoes';
import './ParentComponent.css';

const ParentComponentAnime = () => {
  const [items, setItems] = useState({ cap: false, jacket: false, shoes: false });

  const [{ isOver }, drop] = useDrop({
    accept: [ItemTypes.CAP, ItemTypes.JACKET, ItemTypes.SHOES],
    drop: (item) => {
      setItems((prevItems) => ({ ...prevItems, [item.type]: true }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log("isOver=>",isOver);


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 parent-component" ref={drop}>
          <h1 className='text-center mt-2'>My Anime</h1>
          <div className="anime">
            {items.cap && <div className="cap">Cap</div>}
            {items.jacket && <div className="jacket">Jacket</div>}
            {items.shoes && <div className="shoes">Shoes</div>}
          </div>
        </div>
        <div className="col-6">
          <Cap />
          <Jacket />
          <Shoes />
        </div>
      </div>
    </div>
  );
};

export default ParentComponentAnime;
