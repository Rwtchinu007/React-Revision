import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState([]); 
  // console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    const newArr = [...formData,{ name, email }];
    setFormData(newArr);
    console.log(formData);
    setName("");
    setEmail("");
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center items-center flex-col gap-10 flex-wrap wrap">
      <form
        onSubmit={handleSubmit}
        className="form w-70 h-90 bg-gray-300 flex flex-col justify-center items-center gap-4 rounded-xl p-10"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-white rounded-md p-2"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-white rounded-md p-2"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="px-7 py-2 bg-blue-600 rounded-xl text-white active:scale-95"
          type="submit"
          value="Submit"
        />
      </form>
      <div className="flex justify-center items-center gap-4">
        {
          //we use parenthesis in map function so that we can return JSX directly without using return keyword
          // we use curly braces in map function so that we can use return keyword to return JSX
          formData.map((item)=>(
            <div className="bg-gray-300 p-4 rounded-xl m-2">
              <h1 className="text-lg font-bold">Name: {item.name}</h1>
              <h1 className="text-lg font-bold">Email: {item.email}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
