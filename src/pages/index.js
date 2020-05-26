import React from "react"
import { Helmet } from "react-helmet"
import userbase from "userbase-js"

export default function Home() {
  userbase.init({ appId: "YOUR_APP_ID" })
  return (
    <>
      <Helmet>
        <title>The TimeShip</title>
        <link href="/lillyicon3.png" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <header></header>
      <main>
        <div>Hello world!</div>
      </main>
    </>
  )
}
