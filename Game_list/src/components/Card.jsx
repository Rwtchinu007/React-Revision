import { Star } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div
      className="w-60 h-75 bg-zinc-800 rounded-lg
    flex flex-col gap-3 p-2 mt-6"
    >
      <div className="w-full h-1/2 rounded-lg overflow-hidden ">
        <img
          src="https://images.nexusmods.com/images/games/v2/3333/tile.jpg"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className="flex justify-between items-center
      "
      >
        <h1
        className="text-md font-bold"
        >CyberPunk 2077</h1>
        <div className="flex gap-1 items-center">
          <Star size={20} color="yellow" />
          <h3
          className="text-sm font-semibold"
          >4.9</h3>
        </div>
      </div>
      <p
        className="text-[14px] font-md font-md w-[100%] leading-5">
        Cyberpunk 2077 is an open-world, action-adventure story set in Night
        City.
      </p>
      <button
        className="p-1 px-4 rounded-lg border border-white bg-zinc-500
      hover:bg-purple-700 transition-all duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
