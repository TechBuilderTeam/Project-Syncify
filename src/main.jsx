import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./components/Home/Home";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
// import App from "./App";
import Login from "./components/Pages/Authentication/Login/Login";
import Register from "./components/Pages/Authentication/Register/Register";
import VerifyEmail from "./components/Pages/Authentication/VerifyEmail/VerifyEmail";
import ForgetPassword from "./components/Pages/Authentication/ForgetPassword/ForgetPassword";
import Profile from "./components/User/Profile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:"/otp/verify",
        element:<VerifyEmail/>
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/profile",
        element:<Profile/>
      },
      {
        path: "/forget",
        element: <ForgetPassword/>
      }
    ],
  },
  {
    path:'/dashboard',
    element: <Dashboard/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
