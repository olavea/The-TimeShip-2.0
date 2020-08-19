import React, { useLayoutEffect, useState } from "react"
import { Router } from "@reach/router"
import userbase from "userbase-js"

import TimeShipSignUp from "../components/TimeShipSignUp"

const TimeShip = () => {
  useLayoutEffect(() => {
    const init = async () => {
      try {
        console.log("Init Userbase")

        const session = await userbase.init({
          appId: process.env.GATSBY_USERBASE_TEST_APP_ID,
        })

        console.log("Init Userbase succeeded")
      } catch (error) {
        console.log("Init Userbase failed", error)
      }
    }

    init()
  }, [])
  return (
    <>
      <Router basepath="/app">
        <TimeShipSignUp path="/signup" />
      </Router>
    </>
  )
}

export default TimeShip
