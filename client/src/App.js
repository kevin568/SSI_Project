import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { Issuer } from "./pages/Issuer";
import { Labor } from "./pages/Labor";
import { Company } from "./pages/Company";
import { FindJob } from "./pages/FindJob";
import { AgreeVerification } from "./pages/AgreeVerification";
import { RecievedCase } from "./pages/RecievedCase";
import { ApplyVerification } from "./pages/ApplyVerification";
import { AddJob } from "./pages/AddJob";
import { Home } from "./pages/Home";
import { JobDetail } from "./pages/JobDetail";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { useDispatch } from "react-redux";
import { loadUserFromLocalStorage } from "./redux/userSlice";
import { useEffect } from "react";
import { DeleteJobPage } from "./pages/DeleteJob";
import { DeleteJobDetail } from "./pages/DeleteJobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/issuer",
    element: <Issuer />,
  },
  {
    path: "/labor",
    element: <Labor />,
  },
  {
    path: "/labor/agreeverification",
    element: <AgreeVerification />,
  },
  {
    path: "/labor/findjob",
    element: <FindJob />,
  },
  {
    path: "/job/:id",
    element: <JobDetail />,
  },
  {
    path: "/delete_job/:id",
    element: <DeleteJobDetail />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/company/applyverification",
    element: <ApplyVerification />,
  },
  {
    path: "/company/receivedcase",
    element: <RecievedCase />,
  },
  {
    path: "/company/addjob",
    element: <AddJob />,
  },
  {
    path: "/company/deletejob",
    element: <DeleteJobPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
  }, [dispatch]);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
