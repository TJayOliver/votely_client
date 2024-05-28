import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import UserRegistration from "./user/userRegistration";
import UserSignIn from "./user/userSignIn";
import UserPage from "./user/userPage";
import UserForgotPassword from "./user/userForgotPassword";
import Global from "./global/global";
import VotePage from "./global/votePage";
import Homepage from "./Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Homepage />} />

      <Route path="/user/registration" element={<UserRegistration />} />
      <Route path="/user/signin" element={<UserSignIn />} />
      <Route path="/user/forgotpassword" element={<UserForgotPassword />} />
      <Route path="/user" element={<UserPage />} />

      <Route path="/global/:link" element={<Global />} />
      <Route path="/global/:link/vote/:candidate_id" element={<VotePage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
