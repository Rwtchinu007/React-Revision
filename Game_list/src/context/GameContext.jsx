import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const GameDataContext = createContext();
const GamesContext = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const addToFav = (game) => {
    setFavourite((prev) => {
      const exists = prev.find((item) => item.id === game.id);
      if (exists) return prev;
      else return [...prev, game];
    });
  };

  return (
    <GameDataContext.Provider value={{ favourite, addToFav }}>
      {children}
    </GameDataContext.Provider>
  );
};

export default GamesContext;
