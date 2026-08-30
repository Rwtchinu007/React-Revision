import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
 
  const [postData, setPostData] = useState([
    {
      id: 1,
      name: "Kshitiz Rawat",
      role: "MERN Stack Developer",
      likeCount: 5,
    },
    {
      id: 2,
      name: "Diksha Pundir",
      role: "Data Scientist",
      likeCount: 150,
    },
  ]);


  const like = (id) =>{
  setPostData((prev)=>prev.map((item)=> item.id === id?{...item,likeCount:item.likeCount+1}:item)) //item id same ajaye to like bdado vrna item ko waisa hi rehne do

  }

  const dislike = (id) =>{
    setPostData((prev)=>prev.map((item)=> (item.id === id)&&(item.likeCount>0)?{...item,likeCount:item.likeCount-1}:item)) //item id same ajaye to like ghatado vrna item ko waisa hi rehne do
  }

 
  return (
    <>
      <Card postData={postData} like={like} dislike={dislike}/>
    </>
  );
};

export default App;
