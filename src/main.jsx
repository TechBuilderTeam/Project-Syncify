import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import router from "./Route/Route";
import ContextWrapper from "./context/ContextWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ContextWrapper>
    
      <ToastContainer 
        position="top-right"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> 

      <RouterProvider router={router} />
    </ContextWrapper>
  </React.StrictMode>
);
