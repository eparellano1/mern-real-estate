import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";

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
        },{
          path: "/profile",
          element: <ProfilePage />,
        },{
          path: "/register",
          element: <Register />,
        },{
          path: "/login",
          element: <Login />,
        }
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
