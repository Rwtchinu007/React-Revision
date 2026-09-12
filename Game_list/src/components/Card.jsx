import { Star } from "lucide-react";
import React from "react";

const Card = ({game}) => {
  console.log(game);
  return (
    <div
      className="w-55 h-75 bg-zinc-800 rounded-lg
    flex flex-col gap-3 p-2 mt-6"
    >
      <div className="w-full h-1/2 rounded-lg overflow-hidden ">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className="flex justify-between items-center
      "
      >
        <h1
        className="text-md font-bold"
        >{game.name}</h1>
        <div className="flex gap-1 items-center">
          <Star size={20} color="yellow" />
          <h3
          className="text-sm font-semibold"
          >{game.rating}</h3>
        </div>
      </div>
      <p
        className="text-[14px] font-md font-md w-[100%] leading-5">
        {game.description}
      </p>
      <button
        className="p-1 px-4 rounded-lg border border-white bg-white w-45 m-auto
      hover:bg-purple-700 transition-all duration-300 text-black hover:text-white"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
