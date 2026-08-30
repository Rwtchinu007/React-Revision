import React from "react";
import { useState } from "react";

const Card = ({ postData, like, dislike }) => {
  console.log(postData);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center bg-white p-10 h-fit w-full">
      {postData.map((post) => (
        <div
          className="card px-5 py-6 flex flex-col justify-center items-center rounded-2xl bg-gray-200 shadow-md gap-2"
          key={post.id}
        >
          <img
            src="https://images.pexels.com/photos/34040941/pexels-photo-34040941.jpeg"
            alt={post.name}
            className="rounded-full w-22 h-22"
          />

          <h1 className="text-2xl font-bold">{post.name}</h1>

          <p className="text-gray-500">{post.role}</p>

          <p className="text-gray-500 mt-2">Likes: {post.likeCount}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => like(post.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-600 transition duration-300 active:scale-95"
            >
              Like
            </button>
            <button
              onClick={() => dislike(post.id)}
              className="bg-red-400 text-white px-3 py-1 rounded-xl hover:bg-red-600 transition duration-300 active:scale-95 ml-2"
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
