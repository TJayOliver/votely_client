import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./error/ErrorPage.jsx";
import UserRegistration from "./user/userRegistration";
import UserSignIn from "./user/userSignIn";
import UserPage from "./user/userPage";
import UserForgotPassword from "./user/userForgotPassword";
import Event from "./event/event.jsx";
import VotePage from "./event/votePage";
import Homepage from "./Homepage";
import Transaction from "./event/components/Transaction.jsx";
import PrivacyPolicy from "./privacypolicy.jsx";
import AllEvents from "./event/allEvents.jsx";

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
    path: "/event/:link",
    element: <Event />,
    errorElement: <Error />,
  },
  {
    path: "/event/:link/vote/:candidate_id",
    element: <VotePage />,
    errorElement: <Error />,
  },
  {
    // path: "/event/:candidate_id/voted",
    path: "/transaction",
    element: <Transaction />,
    errorElement: <Error />,
  },
  {
    path: "/event/",
    element: <AllEvents />,
    errorElement: <Error />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
