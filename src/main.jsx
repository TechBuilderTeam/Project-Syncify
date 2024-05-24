import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-calendar/dist/Calendar.css";
import Calendarui from "./components/Pages/Dashboard/Calendarui/Calendarui";
import EditWorkspace from "./components/Pages/Workspace/EditWorkspace";
import DynamicDashboard from "./components/Pages/DynamicDashboard/DynamicDashboard";
import Member from "./components/Pages/DynamicDashboard/Member";
import router from "./Route/Route";

const routers = createBrowserRouter([
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
        path: "/otp/verify",
        element: <VerifyEmail />,
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
      },
      {
        path: "/password-reset-confirm/:uid/:token",
        element: <ResetPassword/>
      },
      {
        path: "/workspace",
        element: <UserWorkspace />,
      },
      {
        path: "/createworkspace",
        element: <CreateWorkspace />,
      },
      {
        path: "/editworkspace/:workspaceId",
        element: <EditWorkspace />,
      },
      // {
      //   path: "workspace/:id",
      //   element: <DynamicDashboard></DynamicDashboard>, 
      //   // loader: ({params}) => fetch(`https://projectsyncifyapi.onrender.com/workspace/list/${params.id}`)
      // },
    ],
  },
  {
    path: "/workspace/:id",
    element: <DynamicDashboard/>,
    // loader: ({params}) => fetch(`https://projectsyncifyapi.onrender.com/workspace/list/${params.id}`),
    children: [
        {
          path: "/workspace/:id",
          element: <Member/>,
        }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/calendar",
        element: <Calendarui />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders> 
      <ToastContainer /> 
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
