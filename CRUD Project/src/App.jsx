import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(null);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || [],
  );

  // Save data whenever data changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleSubmit(e) {
    e.preventDefault();

    
    if (edit !== null) {
      const updateData = [...data];
      updateData[edit] = { title, description };
      setData(updateData);
      setEdit(null);
    }
    
    else{
      setData([...data, { title, description }]);
    }
    // Clear inputs
    setTitle("");
    setDescription("");
  }

  const deletePost = (index) => {
    console.log("Deleting post at index:", index);
    const copyData = [...data];
    copyData.splice(index, 1);
    setData(copyData);
  };

  return (
    <div className="w-full h-screen bg-zinc-700 text-white p-5">
      <form
        onSubmit={handleSubmit}
        className="w-100 h-60 mx-auto mt-10 p-4 border rounded-xl bg-zinc-700 flex flex-col justify-center items-center gap-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-xl"
          type="text"
          placeholder="Enter your name"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-xl"
          type="text"
          placeholder="Enter your post description"
        />

        <button
          className="bg-white text-black px-3 py-2 rounded-xl font-medium hover:bg-zinc-300 transition-all duration-300 active:scale-90"
          type="submit"
        >
          {edit !== null ? "Update Post" : "Add Post"}
        </button>
      </form>

      <Card
        data={data}
        deletePost={deletePost}
        setEdit={setEdit}
        setTitle={setTitle}
        setDescription={setDescription}
      />
    </div>
  );
};

export default App;
