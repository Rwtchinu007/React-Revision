import React from 'react'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-10 flex items-center justify-between bg-gray-600 px-5 py-9'>
        <ul className="flex gap-4">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className='flex gap-4 ml-4'>
          <button
          onClick={()=>navigate("/authLayout")}
           className='bg-blue-500 text-white px-2 py-1 rounded-md'>Login</button>
          <button
          onClick={()=>navigate("/authLayout/register/123")} 
          className='bg-blue-500 text-white px-2 py-1 rounded-md'>Register</button>
        </div>
    </div>
  )
}

export default NavBar