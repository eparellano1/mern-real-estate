import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SinglePage from "./routes/SinglePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },{
          path: "/list",
          element: <ListPage />,
        },{
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
    { 
      path: "list", 
      element: <ListPage /> 
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
