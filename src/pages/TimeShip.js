import React, { useLayoutEffect, useState } from "react"
import { Router } from "@reach/router"

import TimeShipSignup from "../components/TimeShipSignup"

const TimeShip = () => {
  return (
    <>
      <Router basepath="/app">
        <TimeShipSignup path="/signup" />
      </Router>
    </>
  )
}

export default TimeShip
