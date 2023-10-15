import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layout/Layout.element";
import Seasons from "./pages/Seasons/Seasons.element";
import Teams from "./pages/Teams/Teams.element";
import Drivers from "./pages/Drivers/Drivers.element";
import Races from "./pages/Races/Races.element";
import Tracks from "./pages/Tracks/Tracks.element";

function App() {
  const queryClient = new QueryClient();

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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
