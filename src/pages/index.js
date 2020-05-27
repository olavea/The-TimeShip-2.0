import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  function handleTimeShipSignUp(event) {
    event.preventDefeult()

    const username = event.target.elements.signuPUSername.value
    const password = event.target.elements.signuppasSword.value
  }

  return (
    <>
      <Helmet>
        <title>The TimeShip</title>
        <link href="/lillyicon3.png" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
        <div id="auth-view">
          <h1>The TimeShip Sign Up</h1>

          <form id="signup-form" onSubmit={handleTimeShipSignUp}>
            <input
              id="signuPUSername"
              type="text"
              required
              placeholder="Username"
            />
            <input
              id="signuppasSword"
              type="text"
              required
              placeholder="pasSword"
            />
            <button type="submit">Sign Up</button>
          </form>
          <div id="signup-error"></div>
        </div>
      </main>
    </>
  )
}
