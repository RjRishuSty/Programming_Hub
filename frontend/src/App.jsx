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

const App = () => {
  const { authUser, isLoading } = useContext(AuthContext);
  console.log("in APP", authUser);

  // ⏳ Show loading while auth is being checked
  if (isLoading) {
    return <div>Loading...</div>; // or a spinner
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: authUser ? <HomePage /> : <Navigate to="/login" />,
        },
        {
          path: "login",
          element: !authUser ? <LoginPage /> : <Navigate to="/dashboard" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
