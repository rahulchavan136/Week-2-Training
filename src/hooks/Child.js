import React, { memo } from 'react'

 const Child = (show) => {
    console.log("rendered child....");
  return (
    <div>Child</div>
  )
}

export default memo(Child)
