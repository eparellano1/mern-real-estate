import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import { Layout, RequireAuth } from "./routes/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import { ListPageLoader, SinglePageLoader } from "./lib/loaders";

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
          loader: ListPageLoader
        },{
          path: "/:id",
          element: <SinglePage />,
          loader: SinglePageLoader
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
      path: "/", 
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        }, {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        }, {
          path: "/add",
          element: <NewPostPage />,
        }
      ] 
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
