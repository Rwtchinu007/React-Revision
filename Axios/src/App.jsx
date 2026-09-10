import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const data = await axios.get("https://picsum.photos/v2/list", {
      params: {
        page: page,
        limit: 15,
      },
    });
    // console.log(data.data);
    setPostData(data.data);
  };

  useEffect(() => {
    getData();
  }, [page]);
  // console.log(postData);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-4">Axios</h1>
      {/* <button
        onClick={getData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition
    active:scale-95
    duration-300"
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {postData.map((post) => (
          <div
            key={post.id}
            className="card w-40 h-60 bg-zinc-900 mt-4 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-40 h-40 object-cover rounded-md"
              src={post.download_url}
              alt={post.author}
            />
            <h1 className="text-white text-center mt-2 font-semibold">
              {post.author}
            </h1>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
          // getData();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition
    active:scale-95
    duration-300 mt-4"
      >
        Next
      </button>
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
            // getData();
          }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition
    active:scale-95
    duration-300 mt-4"
      >
        Previous
      </button>
    </div>
  );
};

export default App;
