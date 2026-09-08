import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { Approuter } from "./Router/AppRouter.jsx"; 

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Approuter} />,
  // RouterProvider is used to make the router available to the entire application.
);
