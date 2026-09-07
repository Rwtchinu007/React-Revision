import React from "react";
import { Route, Routes, Link } from "react-router";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Laptop from "./pages/Laptop";
import Mobile from "./pages/Mobile";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";

const App = () => {
  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      <nav>
        <ul className="flex justify-center gap-8 bg-black text-white p-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            {/* if we use normal <a> tag then the page will reload so to solve this problem we use link tag in react-router */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />}>
          <Route path="laptop" element={<Laptop />} />
          <Route path="mobile" element={<Mobile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/service/laptop" element={<Laptop />} />
        <Route path="/service/mobile" element={<Mobile />} /> */}
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<CourseDetails/>} /> 
        {/* This is called dynamic routing */}

        <Route
          path="*"
          element={
            <h1 className="h-screen flex items-center justify-center bg-black text-red-400 font-bold text-4xl">
              404| Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
