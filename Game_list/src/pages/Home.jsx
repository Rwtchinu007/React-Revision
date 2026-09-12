import React from "react";
import api from "../config/api";
import { useEffect } from "react";
import Buttons from "../components/Buttons";
import Card from "../components/Card";
import { useLoaderData } from "react-router";

const Home = () => {


 const data =  useLoaderData();
 console.log(data);

  // const getGames = async ()=>{
  //   const data = await api.get("");
  //   console.log(data);

  // }
  // useEffect(()=>{
  //   getGames();
  // },[])
  return <div className="min-h-screen w-full bg-black text-white p-5">
    <div
    className="w-1/2"
    >
      <h1
      className="text-4xl font-bold mb-2 tracking-tight"
      >Explore the 
       <span
      className="text-purple-700 font-serif pl-4 text-5xl"
      >Metaverse</span></h1>
      <p
      className="text-[16px] font-light font-md w-[80%] leading-6" 
      >
        Discover the latest and greatest games in the metaverse. From action-packed adventures to immersive role-playing experiences, our curated selection of games will transport you to new worlds and challenge your skills.
      </p>
    </div>
    <Buttons/>
    <div 
    className="w-full flex flex-wrap gap-5 justify-center"
    >
      {data.results.map((game)=>(
        <Card key={game.id} game={game}/>
      ))}
    </div>
  </div>;
};

export default Home;
