import React from 'react'

const Buttons = () => {
    const title = [
        "All Titles",
        "Trending",
        "New Releases",
        "RPG",
        "Action"
    ]
  return (
    <div
    className="flex gap-4 mt-4">
{title.map((item) => (
        <button key={item} className="p-1 px-4 rounded-full border border-white bg-zinc-500
        hover:bg-purple-700 transition-all duration-300">
          {item}
        </button>
      ))}
    </div>
  )
}

export default Buttons