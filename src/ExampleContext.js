import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

function ExampleChild() {
  let count = useContext(CountContext)

  return (
    <div style={{ backgroundColor: '#ff0', padding: '24px' }}>
      <h3>ExampleChild: count in child {count}</h3>
    </div>
  )
}

function ExampleContext() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <hr />
      <h1>useContext </h1>
      <CountContext.Provider value={count}>
        <ExampleChild />
      </CountContext.Provider>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me in Parent
      </button>
    </div>
  )
}

export default ExampleContext
