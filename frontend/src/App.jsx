import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import BlogsPage from "./pages/BlogsPage";
import BlogInputs from "./components/BlogInputs";

const App = () => {
  const { isToken, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: isToken ? <HomePage /> : <Navigate to="/login" />,
        },
        {
          path: "/dashboard",
          element: isToken ? <DashboardPage /> : <Navigate to="/login" />,
        },
        {
          path: "/news",
          element: isToken ? <BlogsPage /> : <Navigate to="/login" />,
          children: [
             {
              path: "all-news",
              element: <BlogsPage />, 
            },
            {
              path: "create-news",
              element: <BlogsPage />,
            },
            {
              path: "update-news/:id",
              element: <BlogsPage />,
            },
          ],
        },
        {
          path: "/blogs",
          element: isToken ? <BlogsPage /> : <Navigate to="/login" />,
          children: [
             {
              path: "all-blogs",
              element: <BlogsPage />,
            },
            {
              path: "create-blog",
              element: <BlogsPage />,
            },
            {
              path: "update-blog/:id",
              element: <BlogsPage />,
            },
          ],
        },
        {
          path: "login",
          element: !isToken ? <LoginPage /> : <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
