import React, { useRef, useEffect } from 'react';
 
const TimeDisplay = () => {
  const currentTimeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {

      const currentTime = new Date().toLocaleTimeString();
      
      currentTimeRef.current.innerText = currentTime;
      // console.log('Time updated:', currentTime);

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className='mt-5 text-center'>
          <h1>Current Time:</h1>
          <div ref={currentTimeRef}></div> 
    </div>
  );
};

export default TimeDisplay;
