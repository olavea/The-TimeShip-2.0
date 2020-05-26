import React from "react"
import { Helmet } from "react-helmet"
import userbase from "userbase-js"

export default function Home(GATSBY_USERBASE_TEST_APP_ID) {
  userbase.init({ appId: GATSBY_USERBASE_TEST_APP_ID })

  function handleTimeShipSignUp(event) {
    event.preventDefault()
    const username = event.target.elements.signuPUSername.value
    const password = event.target.elements.loginpasSword.value

    userbase
      .signUp({ username, password, rememberMe: "none" })
      //.then(user => showTimeShipGoYear(user.username))
      .catch(
        event => (document.getElementById("signup-error").innerHTML = event)
      )
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
          <h1>Sign Up For The TimeShip</h1>
          <form id="login-form" onSubmit={handleTimeShipSignUp}>
            <input
              id="signuPUSername"
              type="text"
              required
              placeholder="Username"
            />
            <input
              id="loginpasSword"
              type="text"
              required
              placeholder="pasSword"
            />
            <input type="submit" value="Sign Up" />
          </form>
          <div id="signup-error"></div>
        </div>
      </main>
    </>
  )
}
