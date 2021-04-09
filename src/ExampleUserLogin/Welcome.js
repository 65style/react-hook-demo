import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

export function Welcome() {
  let { userInfo, userDispatcher } = useContext(UserContext)

  return (
    <div>
      <h1>Welcome Component</h1>
      <ul>
        <li>Username: {userInfo.username}</li>
        <li>Email: {userInfo.email}</li>
        <li>Age: {userInfo.age}</li>
      </ul>
    </div>
  )
}
