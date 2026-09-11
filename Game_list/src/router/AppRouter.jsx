import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Games from "../pages/Games";
import Favourite from "../pages/Favourite";
import MainLayout from "../layouts/MainLayout";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "games",
        element: <Games />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);
