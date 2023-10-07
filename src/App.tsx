import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Seasons from "./pages/Seasons";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
