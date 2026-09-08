import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
        <NavBar/>
        <Outlet/>
     {/* outlet mean that it will render the child routes of the current route. In this case, it will render the Home component when the path is "/", and it will render the About, Service, or Contact components when their respective paths are matched. */}
    </div>
  )
}

export default Mainlayout