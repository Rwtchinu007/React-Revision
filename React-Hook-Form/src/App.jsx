import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //register is used to connect all input field to react-hook-form and handleSubmit is used to handle the form submission
  console.log(errors);
  const onSubmit = (data) => {
    console.log(
      data.name + "\n",
      data.age + "\n",
      data.email + "\n",
      data.message,
    );
    reset();
  };
  return (
    <div className="w-full h-screen text-white p-5 bg-gray-700 flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold text-center">React Hook Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // the above line is used to handle the form submission and it will call the onSubmit function when the form is submitted
        className=" bg-white rounded-xl text-black p-3 flex flex-col w-90 h-130 mt-10"
      >
        <label
          className="text-center text-[18px] font-semibold text-gray-950"
          htmlFor="name"
        >
          Name
        </label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
            maxLength: {
              value: 20,
              message: "Name must be at most 20 characters long",
            },
          })}
          className=" m-2 border-2 rounded-xl text-black p-2 border-gray-950"
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-[14px] font-semibold">
            {errors.name.message}
          </p>
        )}
        <label
          className="text-center text-[18px] font-semibold text-gray-950"
          htmlFor="age"
        >
          Age
        </label>
        <input
          {...register("age", { required: "Age is required" })}
          className="m-2 border-2 rounded-xl text-black p-2 border-gray-950"
          type="number"
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="text-red-500 text-[14px] font-semibold">
            {errors.age.message}
          </p>
        )}
        <label
          className="text-center text-[18px] font-semibold text-gray-950"
          htmlFor="email"
        >
          Email
        </label>
        <input
          {...register("email", { required: "Email is required",
            pattern:"/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
            message: "Invalid email address"
           })}
          className="m-2 border-2 rounded-xl text-black p-2 border-gray-950"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-[14px] font-semibold">
            {errors.email.message}
          </p>
        )}
        <label
          className="text-center text-[18px] font-semibold text-gray-950"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="m-2 border-2 rounded-xl text-black p-2 border-gray-950"
          placeholder="Enter your message"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-[14px] font-semibold">
            {errors.message.message}
          </p>
        )}
        <button
          className="bg-gray-950 rounded-xl p-2 px-4 hover:bg-gray-700 transition-all duration-300 text-amber-50 w-fit m-auto mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
