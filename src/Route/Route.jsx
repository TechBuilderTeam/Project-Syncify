import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../components/Pages/Authentication/Login/Login";
import Register from "../components/Pages/Authentication/Register/Register";
import VerifyEmail from "../components/Pages/Authentication/VerifyEmail/VerifyEmail";
import ForgetPassword from "../components/Pages/Authentication/ForgetPassword/ForgetPassword";
import Profile from "../components/User/Profile";
import ResetPassword from "../components/Pages/Authentication/ResetPassword/ResetPassword";
import UserWorkspace from "../components/Pages/Workspace/UserWorkspace";
import CreateWorkspace from "../components/Pages/Workspace/CreateWorkspace";
import EditWorkspace from "../components/Pages/Workspace/EditWorkspace";
import DynamicDashboard from "../components/Pages/DynamicDashboard/DynamicDashboard";
import Member from "../components/Pages/DynamicDashboard/Member";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Calendarui from "../components/Pages/Dashboard/Calendarui/Calendarui";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
          element: <PrivateRoute><UserWorkspace /></PrivateRoute>,
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
      element: <PrivateRoute><DynamicDashboard/></PrivateRoute>,
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
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
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


  export default router;