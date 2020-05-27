import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>The TimeShip</title>
        <link href="/lillyicon3.png" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
        <div id="auth-view">
          <div>Hello Ruby Reckless!</div>
        </div>
      </main>
    </>
  )
}
