import React, { useState, useEffect } from 'react'

function ExampleEffectArgs() {
  const [count, setCount] = useState(0)
  const [effect, setEffect] = useState(0)

  
  // useEffect 监听状态变化
  useEffect(() => {
    setEffect(effect + 1)
    // eslint-disable-next-line
  }, [count])

  return (
    <div>
      <hr />
      <h1>
        useEffect 带参数 effect:{effect} count: {count}
      </h1>
      <div>useEffect 监听状态变化 带参数 时 监听指定的状态变化时触发</div>
      <div>
        useEffect 监听状态变化 带参数 为 [] 只有当第一次渲染（mount）
        和不渲染（unmount）时执行
      </div>
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

export default ExampleEffectArgs
