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
// import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Calendarui from "../components/Pages/Dashboard/Calendarui/Calendarui";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Board from "../components/Pages/Board/Board";
import Plans from "../components/Pages/Plans/Plans";
import Tasks from "../components/Pages/Tasks/Tasks";
import Features from "../components/Pages/Features/Features";
import Export from "../components/Pages/Export/Export";
import Contact from "../components/Pages/Contact/Contact";
import MarketingDetails from "../components/Pages/Home/DifferentTypeOfTabSection/TabPages/MarketingDetails";
import OperationDetails from "../components/Pages/Home/DifferentTypeOfTabSection/TabPages/OperationDetails";
import ItDetials from "../components/Pages/Home/DifferentTypeOfTabSection/TabPages/ItDetials";
import ProductDetails from "../components/Pages/Home/DifferentTypeOfTabSection/TabPages/ProductDetails";
import CompanyDetails from "../components/Pages/Home/DifferentTypeOfTabSection/TabPages/CompanyDetails";
import Inside from "./../components/Pages/Inside/Inside";
import DynamicProfile from "../components/User/DynamicProfile";
import TermsCondition from "../components/Pages/TermsCondition/TermsCondition";
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
        path: "/features",
        element: <Features />,
      },

      {
        path: "/contact",
        element: <Contact />,
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
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/terms&condition",
        element: (
          <PrivateRoute>
            <TermsCondition />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:pId",
        element: <DynamicProfile />,
      },
      {
        path: "/forget",
        element: <ForgetPassword />,
      },
      {
        path: "/password-reset-confirm/:uid/:token",
        element: <ResetPassword />,
      },
      {
        path: "/marketingDetails",
        element: <MarketingDetails />,
      },
      {
        path: "/operationDetails",
        element: <OperationDetails />,
      },
      {
        path: "/itDetails",
        element: <ItDetials />,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
      },
      {
        path: "/companyDetails",
        element: <CompanyDetails />,
      },
      {
        path: "/workspace",
        element: (
          <PrivateRoute>
            {" "}
            <UserWorkspace />
          </PrivateRoute>
        ),
      },
      {
        path: "/createworkspace",
        element: (
          <PrivateRoute>
            <CreateWorkspace />
          </PrivateRoute>
        ),
      },
      {
        path: "/editworkspace/:workspaceId",
        element: (
          <PrivateRoute>
            {" "}
            <EditWorkspace />
          </PrivateRoute>
        ),
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
    element: <DynamicDashboard />,
    // loader: ({params}) => fetch(`https://projectsyncifyapi.onrender.com/workspace/list/${params.id}`),
    children: [
      {
        path: "/workspace/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Member />{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/workspace/:id/boards",
        element: (
          <PrivateRoute>
            {" "}
            <Board />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/workspace/:id/tasks",
        element: (
          <PrivateRoute>
            {" "}
            <Tasks />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/workspace/:id/plans",
        element: (
          <PrivateRoute>
            {" "}
            <Plans />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/workspace/:id/export",
        element: (
          <PrivateRoute>
            {" "}
            <Export />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/workspace/:id/calendar",
        element: <Calendarui />,
      },
      {
        path: "/workspace/:id/inside",
        element: <Inside />,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard />
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "/dashboard/profile",
  //       element: <Profile />,
  //     },
  //   ],
  // },
]);

export default router;
