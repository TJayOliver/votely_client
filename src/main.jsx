import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./error/ErrorPage.jsx";
import UserRegistration from "./user/userRegistration";
import UserSignIn from "./user/userSignIn";
import UserPage from "./user/userPage";
import UserForgotPassword from "./user/userForgotPassword";
import Global from "./global/global";
import VotePage from "./global/votePage";
import Homepage from "./Homepage";
import Transaction from "./global/components/Transaction.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: "/user/registration",
    element: <UserRegistration />,
    errorElement: <Error />,
  },
  {
    path: "/user/signin",
    element: <UserSignIn />,
    errorElement: <Error />,
  },
  {
    path: "/user/forgotpassword",
    element: <UserForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <Error />,
  },
  {
    path: "/global/:link",
    element: <Global />,
    errorElement: <Error />,
  },
  {
    path: "/global/:link/vote/:candidate_id",
    element: <VotePage />,
    errorElement: <Error />,
  },
  {
    path: "/global/voted",
    element: <Transaction />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
