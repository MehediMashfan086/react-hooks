import React, { useState } from 'react'

const UseStateWithObject = () => {
    const[info, setInfo] = useState({
        name: "",
        age: ""
    })
  return (
    <div>
        <h1>UseState With Object</h1>
        <form>
            <input value={info.name} onChange={(e) => setInfo({...info, name: e.target.value})} />
            <input value={info.age} onChange={(e) => setInfo({...info, age: e.target.value})} />
        </form>
        <p>Name: {info.name}</p>
        <p>Age: {info.age}</p>
    </div>
  )
}

export default UseStateWithObject