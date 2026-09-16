import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './redux/slice/userSlice.js'

const App = () => {
  const data = useSelector(state=>state.user)
  
  console.log(data)
  const dispatch = useDispatch()
  const getProductData = async()=>{
    dispatch(fetchData())
  }
  return (
    <div
      className='flex flex-col items-center justify-center h-screen w-screen gap-4'>
        
      <button
      onClick={getProductData}
      className='bg-blue-500 p-2 rounded-md active:bg-blue-700 transition-all duration-300'
      >
        Fetch Data
      </button>
       
    </div>
  )
}

export default App