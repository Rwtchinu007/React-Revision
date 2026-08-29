import React from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [postData, setpostData] = useState([
    {
      id: 1,
      name: "Kshitiz Rawat",
      profession: "Full Stack Developer",
      likeCount: 10,
      profileImage: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      profession: "Frontend Developer",
      likeCount: 25,
      profileImage: "https://i.pravatar.cc/150?img=12",
    },
  ]);

  return (
    <div>
      <Card postData={postData} />
    </div>
  );
};

export default App;
