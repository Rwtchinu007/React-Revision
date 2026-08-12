import React from "react";
import Card from "./components/Card";

const App = () => {
  const characters = [
    {
      id: 1,
      name: "Zoro",
      imgUrl: "https://imgs.search.brave.com/7Z8If_Q1mW3EJvRnyyLpePArcI-2z5Dgd_lof7cSRXg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg3NTU3/MTYuanBn",
      color: "#2e7d32",
      role: "Swordsman",
      status: "Alive",
    },
    {
      id: 2,
      name: "Sanji",
      imgUrl: "https://imgs.search.brave.com/01Egd2nQ3UPL7F6zSJV6XApGP9bovXI1nMySNjugnOw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVmLzk1/L2YxLzVmOTVmMTk4/MjgxMDliMjYwZjhk/MGZiYjZhYTQyZjIx/LmpwZw",
      color: "#fbc02d",
      role: "Cook",
      status: "Alive",
    },
    {
      id: 3,
      name: "Luffy",
      imgUrl: "https://imgs.search.brave.com/dJ6d8ns_TeIWMG3dSvWRlOFLFp3-ScY0QXUdqDeQPqI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExODk3/MzI0LmpwZw",
      color: "#d32f2f",
      role: "Captain",
      status: "Alive",
    },
    {
      id: 4,
      name: "Nami",
      imgUrl: "https://imgs.search.brave.com/aRrtZRjZZXLS8mcFQiDrwK84e3M35sv3nXbSDJkuQrY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I3LzEy/LzA2L2I3MTIwNjk3/ZTAxYTIxZGQ3Mjgx/YzllNjcxOWVmNWQx/LmpwZw",
      color: "#ff9800",
      role: "Navigator",
      status: "Alive",
    },
    {
      id: 5,
      name:"Ace",
      imgUrl:"https://imgs.search.brave.com/RGjb1cYCIVjBVJ_bUHTDcOGUyG-UZdSmu1AxwiYdY9k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vbmVw/aWVjZS5nZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMjgv/MjAyNS8wOS9PUDEz/LTAwMi53ZWJw",
      color:"#f44336",
      role:"Commander",
      status:"Deceased"
    }
  ];

  return (
    <>
      {characters.map((character) => (
        // <Card key={character.id} {...character} />
        <Card key={character.id} character={character} />
      ))}
    </>
  );
};

export default App;