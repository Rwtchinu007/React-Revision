import React, { useState } from "react";

const Card = ({ postData }) => {
  console.log(postData);

  const [likeCount, setLikeCount] = useState(10);

  function handleLike() {
    setLikeCount((prevCount) => prevCount + 1);
  }

  function handleDislike() {
    if (likeCount > 0) {
      setLikeCount((prevCount) => prevCount - 1);
    } else {
      alert("Like count cannot be negative");
    }
  }

  return (
    <div className="w-full h-full rounded-lg shadow-lg p-4 flex justify-center items-center bg-gray-700 ">
      {postData.map((item) => (
        <div
          className="card p-7 flex flex-col items-center justify-between m-5 rounded-2xl bg-white gap-1"
          key={item.id}
        >
          <img
            className="w-24 h-24 rounded-full"
            src={item.profileImage}
            alt={item.name}
          />

          <h2 className="text-lg font-semibold">{item.name}</h2>

          <p className="text-gray-500">{item.profession}</p>

          <span className="text-gray-700">{likeCount}</span>

          <div className="flex items-center gap-2">
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-xl hover:bg-blue-600"
              onClick={handleLike}
            >
              Like
            </button>

            <button
              className="bg-red-400 text-white px-4 py-1 rounded-xl hover:bg-red-600"
              onClick={handleDislike}
            >
              Dislike
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
