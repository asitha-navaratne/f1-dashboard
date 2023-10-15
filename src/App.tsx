import { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layout/Layout.element";
import Seasons from "./pages/Seasons/Seasons.element";
import Teams from "./pages/Teams/Teams.element";
import Drivers from "./pages/Drivers/Drivers.element";
import Races from "./pages/Races/Races.element";
import Tracks from "./pages/Tracks/Tracks.element";

import AxiosInstance from "./api/axios";

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    const requestInterceptor = AxiosInstance.interceptors.request.use(
      (config) => {
        config.headers["x-apisports-key"] = import.meta.env.VITE_APISPORTS_KEY;

        return config;
      },
      (err) => {
        Promise.reject(err);
      }
    );

    return () => {
      AxiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, []);

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
