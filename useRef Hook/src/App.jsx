import React from "react";
import { useRef } from "react";

const App = () => {
  console.log("App Rendering");
  // const nameRef = useRef();
  // const ageRef = useRef();
  // const emailRef = useRef();
  // const messageRef = useRef();
  const formRef = useRef({});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formRef.current.name.value);
    console.log(formRef.current.age.value);
    console.log(formRef.current.email.value);
    console.log(formRef.current.message.value);

    formRef.current.name.value = "";
    formRef.current.age.value = "";
    formRef.current.email.value = "";
    formRef.current.message.value = "";
  }
  return (
    <div className="w-full h-screen text-white p-5 bg-gray-700 flex flex-col items-center justify-center">
      <div className="rounded-xl flex flex-col items-center justify-center bg-blue-400 p-5 text-black">
        <h1 className="text-3xl font-bold">Contact Form</h1>
        <p className="text-black text-sm">Fill in the details below</p>
        <form
          onSubmit={handleSubmit}
          className=" bg-white rounded-xl text-black p-3 flex flex-col gap-6 w-80 h-100 mt-10"
        >
          <input
            ref={(e) => (formRef.current.name = e)}
            className=" mt-5 border-2 rounded-xl text-black p-2 border-gray-950"
            type="text"
            placeholder="Enter your name"
          />
          <input
            ref={(e) => (formRef.current.age = e)}
            // ref={(e) => {
            // console.log(e);
            //}}
            // it will give us the reference of the input element and we can access its value using e.value
            className="border-2 rounded-xl text-black p-2 border-gray-950"
            type="number"
            placeholder="Enter your age"
          />
          <input
            ref={(e) => (formRef.current.email = e)}
            className="border-2 rounded-xl text-black p-2 border-gray-950"
            type="email"
            placeholder="Enter your email"
          />
          <textarea
            ref={(e) => (formRef.current.message = e)}
            className="border-2 rounded-xl text-black p-2 border-gray-950"
            placeholder="Enter your message"
          ></textarea>
          <button
            className="bg-gray-950 rounded-xl p-2 px-4 hover:bg-gray-700 transition-all duration-300 text-amber-50 w-fit m-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

// if we want to prevent use of multiple useRef hooks we can use useRef hook with object and store multiple values in it.
