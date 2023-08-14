import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const[count, setCount] = useState(0)

    useEffect (() => {
        document.title = `Count ${count}`
    })

  return (
    <div>
        <h1>UseEffect</h1>
        <h4>Count: {count}</h4>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UseEffect