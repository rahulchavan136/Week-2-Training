import React, { useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import Child from './Child'

export const MyuseCallback = () => {
    const [add,setAdd] = useState(0)
    const [add2,setAdd2] = useState(100)
    const show = useCallback(()=>{
    },[])

  return (
    <div className='text-center mt-5'> 
        <p>Add : {add}</p>
        <Button onClick={()=>setAdd(add+1)}>
        Add
        </Button>
        <hr />
        <p>Add : {add2}</p>
        <Button onClick={()=>setAdd2(add2+1)}>
        Add
        </Button>
        <br />
        <Child show={show} />
    </div>
  )
}
