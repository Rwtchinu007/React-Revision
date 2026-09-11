import React from "react";
import { Gamepad2,Search,User } from "lucide-react";
import { NavLink } from "react-router";

const NavBar = () => {
  return <div
  className="flex justify-between items-center px-4
  py-3 text-white border-b border-white">
    <div className="flex gap-2 items-center">
    <Gamepad2 size={40} color="purple" />
    <h1
    className="text-xl font-md"
    >GameList</h1>
    </div>
    <div
    className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/favourite">Favourites</NavLink>
    </div>
    <div className="flex gap-8">
        <div
        className="w-55  flex gap-2 items-center border border-gray-600 rounded-3xl p-2
        bg-[#111111]"
        ><Search size={20} color="white" />
        <h3
        className="text-white
        font-md text-md"  
        >Search Games....</h3>
        </div>
        <div
        className="flex gap-2 items-center">
            <User size={20} color="white" />
        </div>
    </div>

  </div>;
};

export default NavBar;
