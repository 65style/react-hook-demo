import React, { useReducer } from 'react'

function CountReducer(state, action) {
  // eslint-disable-next-line
  switch (action) {
    case 'pv':
      return { ...state, pv: state.pv + 1 }
    case 'ip':
      return { ...state, ip: state.ip + 1, pv: state.pv + 1 }
  }
  return state
}

function ExampleReducer() {
  const [countInfo, dispatch] = useReducer(CountReducer, { ip: 0, pv: 0 })

  return (
    <div>
      <hr />
      <h1>useReducer: countInfo {JSON.stringify(countInfo)}</h1>
      <button onClick={() => dispatch('ip')}>Add IP</button>
      <button onClick={() => dispatch('pv')}>Add PV</button>
    </div>
  )
}

export default ExampleReducer
