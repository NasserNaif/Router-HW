import React from 'react'
import { Outlet } from "react-router-dom"
import Nav from './Nav'

function OutletComp() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default OutletComp