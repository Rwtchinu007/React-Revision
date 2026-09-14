import React, { useEffect, useState } from "react";
import { Gamepad2, Search, User } from "lucide-react";
import { NavLink, useSearchParams } from "react-router";

const NavBar = () => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);

        if (value.trim()) {
          params.set("search", value.trim());
        } else {
          params.delete("search");
        }

        // Whenever search changes, go back to page 1
        params.set("page", "1");

        return params;
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [value, setSearchParams]);

  return (
    <div className="flex justify-between items-center px-4 py-3 text-white border-b border-white">
      
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Gamepad2 size={40} color="purple" />
        <h1 className="text-xl font-medium">GameList</h1>
      </div>

      {/* Navigation */}
      <div className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/favourite">Favourites</NavLink>
      </div>

      {/* Search + User */}
      <div className="flex gap-8">
        
        {/* Search */}
        <div className="w-55 flex gap-2 items-center border border-gray-600 rounded-3xl p-2 bg-[#111111]">
          <Search size={20} color="white" />

          <input
            type="text"
            placeholder="Search Games"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />
        </div>

        {/* User */}
        <div className="flex gap-2 items-center">
          <User size={20} color="white" />
        </div>

      </div>
    </div>
  );
};

export default NavBar;