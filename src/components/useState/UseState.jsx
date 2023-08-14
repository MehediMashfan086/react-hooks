import React, { useState } from 'react'

const UseState = () => {
    const[count, setCount] = useState(0);
  return (
    <div>
        <h1>UseState</h1>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseState