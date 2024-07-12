import React, { useState, useCallback } from 'react';
import { Button } from 'react-bootstrap';

const arePropsEqual = (prevProps, nextProps) => {
  console.log('Comparing props');
  return prevProps.data === nextProps.data;
};

const MyMemoComponent = React.memo(({ data }) => {
  console.log('MyMemoComponent - Rendering');
  return (
    <div>
      <h1>Data: {data}</h1>
    </div>
  );
}, arePropsEqual);

const MymainComponent = () => {
  const [data, setData] = useState(10);
  const [multiplier, setMultiplier] = useState(1);

  const memoizedData = data * multiplier;

  const updateData = useCallback(() => {
    const newData = data * data / data;
    setData(newData);
  }, [data]);

  const updateMultiplier = useCallback(() => {
    setMultiplier(prevMultiplier => prevMultiplier + 1);
  }, []);

  console.log('MymainComponent - Rendering');
  return (
    <div className='text-center mt-5'>
      <MyMemoComponent data={memoizedData} />
      <Button variant='danger' onClick={updateData}>Update Data</Button> &nbsp;
      <Button variant='danger' onClick={updateMultiplier}>Update Multiplier</Button>
    </div>
  );
};

export default MymainComponent;
