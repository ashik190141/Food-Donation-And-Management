// import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../Page/Home/Home';
import Login from '../Page/Authentication/Login';
import Register from "@/Page/Authentication/Register";
import Dashboard_Layout from '../components/layout/Dashboard_Layout';
import AddSupply from '../Page/Dashboard/AddSupply';
import AllSupply from "@/Page/Dashboard/AllSupply";
import DashboardHome from "@/Page/Dashboard/DashboardHome";
import UpdateDonation from "@/Page/Dashboard/UpdateDonation";
import AllSupplies from '../Page/AllSuplies/AllSupplies';
import SupplyDetails from '../Page/AllSuplies/SupplyDetails';
import LeaderBoard from '../Page/LeaderBoard/LeaderBoard';
import GratitudeWall from '../Page/Gratitude/GratitudeWall';
import Volunteer from '../Page/Authentication/Volunteer';
import ProtectedRoute from '../components/layout/ProtectedRoute';
import AboutUs from '../Page/Home/AboutUs';
import ErrorPage from '../Page/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "supplies",
        element: <AllSupplies></AllSupplies>,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetails></SupplyDetails>,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/gratitudeWall",
        element: <GratitudeWall></GratitudeWall>,
      },
      {
        path: "/volunteer",
        element: (
          <ProtectedRoute>
            <Volunteer></Volunteer>
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard_Layout></Dashboard_Layout>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "create-supply",
        element: <AddSupply></AddSupply>,
      },
      {
        path: "supplies",
        element: <AllSupply></AllSupply>,
      },
      {
        path: "updateDonation/:id",
        element: <UpdateDonation></UpdateDonation>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
