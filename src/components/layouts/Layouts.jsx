import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router-dom'
import NavFooter from '../navFooter/NavFooter'

const Layouts = () => {

  return (
    <>

      <NavBar />
      <Outlet />
      <NavFooter />


    </>
  )
}

export default Layouts