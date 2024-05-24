import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-calendar/dist/Calendar.css";
import router from "./Route/Route";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <ToastContainer /> 
      <RouterProvider router={router} />
  
  </React.StrictMode>
);
