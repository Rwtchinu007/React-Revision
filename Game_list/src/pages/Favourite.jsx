import React from 'react'
import {GameDataContext} from "../context/GameContext"
import { useContext } from 'react'
import { useEffect } from 'react'

const Favourite = () => {
  const {favourite} = useContext(GameDataContext)
  useEffect(()=>{
    console.log(favourite)
  },[])
  if(favourite.length ==0){
    return <p className='text-center text-2xl mt-10'>No Favourite Games</p>
  }
  return (
    <div 
    className="flex flex-wrap gap-4 justify-start items-center w-80 p-4 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 h-40 font-display">
      {favourite.map((game)=>(
        <div key={game.id} className='bg-gray-800 p-4 rounded-lg'>
          <img src={game.background_image} alt={game.name} className='w-full h-64 object-cover rounded-lg mb-4'/>
          <h2 className='text-xl font-bold mb-2'>{game.name}</h2>
          <p className='text-gray-400 mb-2'>Released: {game.released}</p>
          <p className='text-gray-400 mb-2'>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Favourite