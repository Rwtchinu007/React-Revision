import React from 'react'
import { createContext } from 'react'

export const GameDataContext = createContext();

const GameContext = ({children}) => {

  return (
    <div>{children}</div>
  )
}

export default GameContext