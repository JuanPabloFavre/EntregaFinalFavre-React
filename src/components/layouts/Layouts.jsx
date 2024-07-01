import React from 'react'
import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router-dom'
import NavFooter from '../navFooter/NavFooter'

const Layouts = () => {
  return (
    <div>
        <NavBar />
        <Outlet/>
        <NavFooter/>


    </div>
  )
}

export default Layouts