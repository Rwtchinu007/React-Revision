import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Favourite from "../pages/Favourite";
import MainLayout from "../layouts/MainLayout";
import { gamesLoader,gamesDetailsLoader } from "../service/gamesLoader";
import GamesDetails from "../pages/GamesDetails";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: gamesLoader,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
      {
        path: "gamesDetails/:id",
        element: <GamesDetails />,
        loader: gamesDetailsLoader
      },
    ],
  },
]);
