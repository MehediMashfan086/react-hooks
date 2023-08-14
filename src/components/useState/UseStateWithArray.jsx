import React, { useState } from 'react'

const UseStateWithArray = () => {
    const[lists, setLists] = useState([])

    const generateList = () => {
        setLists([...lists, 
        {
            id: lists.length,
            value: Math.random()
        }
    ])
    }

    const resetList = () => {
        setLists([])
    }

  return (
    <div>
        <h1>UseState With Array</h1>
        <button onClick={generateList}>Generate List</button>
        <button onClick={resetList}>Reset</button>
        <ul>
            {lists.map(list => (
                <li key={list.id}>{list.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseStateWithArray