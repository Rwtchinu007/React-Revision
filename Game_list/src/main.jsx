import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/AppRouter.jsx";
import GameContext from "./context/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <GameContext>
    <RouterProvider router={appRouter} />
  </GameContext>,
);
