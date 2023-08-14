import React, { useState } from 'react'

const UseStatePrevState = () => {
    const[count, setCount] = useState(0)

    const incrementTen = () => {
        for(let i=0; i<10; i++){
            setCount(prevState => prevState + 1)
        }
    }
  return (
    <div>
        <h1>UseState PrevState</h1>
        <h4>Count: {count}</h4>
        <button onClick={() => incrementTen()}>Increment</button>
    </div>
  )
}

export default UseStatePrevState