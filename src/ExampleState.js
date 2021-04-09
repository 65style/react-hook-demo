import React, { useState } from 'react'

function ExampleState() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <hr />
      <h1>useState: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >Click me</button>
    </div>
  )
}

export default ExampleState
