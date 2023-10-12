import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout.element";
import Seasons from "./pages/Seasons/Seasons.element";
import Teams from "./pages/Teams/Teams.element";
import Drivers from "./pages/Drivers/Drivers.element";
import Races from "./pages/Races/Races.element";
import Tracks from "./pages/Tracks/Tracks.element";

import { loader as seasonsLoader } from "./pages/Seasons/Seasons.loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Seasons />,
          loader: seasonsLoader,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/drivers",
          element: <Drivers />,
        },
        {
          path: "/races",
          element: <Races />,
        },
        {
          path: "/tracks",
          element: <Tracks />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
