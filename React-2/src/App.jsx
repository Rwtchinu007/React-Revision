import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(null);// we can pass 0,null,undefined,empty string as initial value of state, but if we pass null or undefined then react will not render the value of num in the UI, so it is better to pass 0 as initial value of state
  const changeNum = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 5);
    // this is called batch updating, react will only update the state once and not three times, so the final value of num will be 1 instead of 3 
  };
  const changeNum2 = () => {
    setNum((prevNum)=> prevNum - 5);
    setNum((prevNum)=> prevNum - 5);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-blue-500 text-[100px] font-bold ">{num}</h1>

      <button
        onClick={changeNum}
        className="px-8 py-2 rounded-lg bg-blue-400 text-white text-xl font-light active:scale-95"
      >
        Increase
      </button>
      <button
        onClick={changeNum2}
        className="px-8 py-2 rounded-lg bg-blue-400 text-white text-xl font-light active:scale-95"
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
