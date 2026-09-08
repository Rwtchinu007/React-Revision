import { createBrowserRouter } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Service from "../screens/Service";
import Contact from "../screens/Contact";
import Mainlayout from "../layout/mainlayout";
import Authlayout from "../layout/Authlayout";
import Login from "../screens/Login";
import Register from "../screens/Register";

// createBrowserRouter is a function that creates a router instance for a web application.
export const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        // blank path means that this route will be matched when the parent route ("/") is matched. In this case, it will render the Home component when the path is "/".
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"authLayout",
        element:<Authlayout />,
        children:[
          {
            index:true,
            element: <Login />
          },
          {
            path:"register/:id",
            element: <Register />
          }
        ]
      }
    ],
  },
]);
