import React from "react";

const Card = ({data,deletePost,setTitle,setDescription,setEdit}) => {


    
  return <div className="w-full h-fit bg-zinc-700 text-white p-5">
    {data.map((item,index)=>(
         <div key={index} className="card px-5 flex flex-col justify-center items-center w-60 h-50 bg-zinc-900 rounded-xl mt-2 gap-1.5">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div className="flex gap-2">
        <button 
        onClick={()=>{
          setTitle(item.title);
          setDescription(item.description);
          setEdit(index);

        }}
        className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-3 rounded-xl transition-colors duration-300">
          Edit Post
        </button>

      <button 
      onClick={()=>deletePost(index)}
      className="bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-xl transition-colors duration-300">
        Delete Post
      </button>
      </div>
    </div>
    ))}
  </div>;
};

export default Card;
