import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Seasons from "./pages/Seasons";
import Teams from "./pages/Teams";
import Drivers from "./pages/Drivers";
import Races from "./pages/Races";
import Tracks from "./pages/Tracks";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Seasons />,
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
