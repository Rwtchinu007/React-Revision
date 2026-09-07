import React from 'react'
import {useParams} from 'react-router' 

const CourseDetails = () => {
    const params = useParams() // This is a hook which is used to get the dynamic parameter from the url
    console.log(params) // This will log the dynamic parameter in the console
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white font-bold text-4xl">
      <h1>{params.courseId} Page</h1>
    </div>
  )
}

export default CourseDetails