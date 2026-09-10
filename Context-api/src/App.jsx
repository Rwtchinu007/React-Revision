import React from "react";
import { useContext } from "react";
import { userDataContext } from "./context/UserContext.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  const data = useContext(userDataContext);
  // third step is context use krna
  console.log(data);
  return (
    <div>
      <NavBar />
      <h1>Hello I am {data}</h1>
    </div>
  );
};

export default App;
