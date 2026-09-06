import React from 'react'
import { Link,Outlet } from 'react-router' 

const Service = () => {
  return (
     <div className="h-screen flex flex-col items-center justify-center gap-10 bg-black text-white font-bold text-4xl">
        <h1>Service Page</h1>
        <div className="flex gap-8 mt-4">
          <Link to="/service/laptop" className="hover:text-gray-400">Laptop</Link>
          <Link to="/service/mobile" className="hover:text-gray-400">Mobile</Link>
        </div>
        <Outlet />
        {/* Outlet is used for nested routing in parents and their child routes */}
    </div>
  )
}

export default Service