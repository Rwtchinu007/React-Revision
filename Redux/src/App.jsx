import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementValueByUserInput } from './redux/features/CounterSlice'

const App = () => {
  // useSelector hook ka use karte h state ko access krne k liye

  const data = useSelector(state=>state.count.value)
  console.log(data)

  // useDispatch hook ka use karte h action ko dispatch krne k liye
  const dispatch = useDispatch()
  const handleIncrement = () =>{
    dispatch(increment())
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }
  const handleIncrementByUser = () =>{
    dispatch(incrementValueByUserInput(5)) 
  }

  return (
    <div
      className='flex flex-col items-center justify-center gap-6 h-screen'>
      <h1
      className='font-bold text-5xl'
      >Counter - {data}</h1>
      <div
      className='flex gap-4' >

      <button
      onClick={handleIncrement}
      className='bg-blue-500 text-white px-4 py-2 rounded-md active:scale-90 transition-all duration-300'
      >Increment</button>
      <button
      onClick={handleDecrement}
      className='bg-red-500 text-white px-4 py-2 rounded-md active:scale-90 transition-all duration-300'>
        Decrement
      </button>
      <button
      onClick={handleIncrementByUser}
      className='bg-green-500 text-white px-4 py-2 rounded-md active:scale-90 transition-all duration-300'
      >Increment By User Input</button>
      </div>
    </div>
  )
}

export default App