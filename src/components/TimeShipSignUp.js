import React, { useState, useLayoutEffect } from "react"
import userbase from "userbase-js"
import { Link, navigate } from "gatsby"

const TimeShipSignUp = ({ user, setUser }) => {
  const TimeShipSignUpSubmitHandler = async event => {
    event.preventDefault()

    const username = event.target.elements.usernameInput.value
    const email = event.target.elements.emailInput.value
    const password = event.target.elements.pasSwordInput.value

    const user = await userbase.signUp({ username, email, password })

    console.log("You signed up", user.username)
    alert(`You signed up, ${user.username}`)
  }
  return (
    <>
      <h1>The TimeShip Sign Up 🏹 </h1>

      <form onSubmit={TimeShipSignUpSubmitHandler}>
        <label>
          Username: <br />
          <input type="text" id="usernameInput" name="username" required />
        </label>
        <br />
        <br />
        <label>
          Email: <br />
          <input type="text" id="emailInput" name="email" required />
        </label>
        <br />
        <br />
        <label>
          pasSword: <br />
          <input type="text" id="pasSwordInput" name="password" required />
        </label>
        <br />
        <br />

        <button type="submit">Sign Up</button>
        <small>
          {" "}
          or <Link to="/app/login">log in</Link>
        </small>
      </form>
    </>
  )
}

export default TimeShipSignUp
