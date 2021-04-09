import React, { useState, useEffect } from 'react'

let effect = 0
function ExampleEffect() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    document.getElementById('effect').innerText = ++effect;
  })

  return (
    <div>
      <hr />
      <h1>
        useEffect 无参数 effect: <b id="effect"></b> count: {count}
      </h1>
      <div>useEffect 监听状态变化 无参数 时 监听指定的状态变化时触发</div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default ExampleEffect
