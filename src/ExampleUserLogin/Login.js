import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

export function Login() {
  let { loginInfo, userDispatcher } = useContext(UserContext)

  let loginHandler = (e) => {
    e.preventDefault()
    fetch('/json/user.login.json')
      .then((res) => {
        return res.json()
      })
      .then((userInfo) => {
        userDispatcher(userInfo)
      })
      .catch((err) => {
        userDispatcher({ error: 'Login Error' })
      })
  }

  return (
    <div>
      <h1>Login Component</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}
