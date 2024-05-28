import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "../../configurations/URL";

const UserForgotPassword = () => {
  axios.defaults.withCredentials = true;

  const [checkUsername, setCheckUsername] = useState({ user_name: "" });
  const [trackUsername, setTrackUsername] = useState(false);
  const [trackVerificationCode, setTrackVerificationCode] = useState(false);
  const [passwordChangeTracker, setPasswordChangeTracker] = useState(false);
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [verifyCode, setVerifyCode] = useState({
    user_id: userID,
    code: "",
  });

  const handleCheckUsername = (e) => {
    const { name, value } = e.target;
    setCheckUsername((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitUsername = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/verification/create`,
        checkUsername
      );
      if (response.data.message) {
        setLoading(false);
        setMessage("Proceed to Change Password");
        setTrackUsername(true);
        setUserID(response.data.user);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message);
    }
  };

  const handleVerificationCode = (e) => {
    const { name, value } = e.target;
    setVerifyCode((prev) => ({
      ...prev,
      user_id: userID,
      [name]: value,
    }));
  };
  const submitVerificationCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/verification/verify`,
        verifyCode
      );
      if (response.data.message) {
        setLoading(false);
        setMessage("Proceed to Change Password");
        setTrackVerificationCode(true);
      }
    } catch (error) {
      if (error.response.status === 409) {
        setMessage(error.response.data.message);
      }
    }
  };

  const [UpdatePassword, setUpdatePassword] = useState({
    user_id: userID,
    user_password: "",
  });
  const handleUpdatePassword = (e) => {
    const { name, value } = e.target;
    setUpdatePassword((prev) => ({
      ...prev,
      user_id: userID,
      [name]: value,
    }));
  };
  const submitUpdatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/user/updatepassword`,
        UpdatePassword
      );
      if (response.data.message) {
        setMessage(response.data.message);
        setPasswordChangeTracker(true);
      }
    } catch (error) {
      if (error.response.status === 409) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <main className="flex bg-white h-screen justify-center">
      <section className=" grid place-content-center">
        <div>
          <p
            className={
              passwordChangeTracker
                ? "hidden"
                : "font-bold md:text-3xl whitespace-nowrap mb-4 text-center"
            }
          >
            Reset Password
          </p>
          {/* verify username */}
          {!trackUsername && (
            <form
              onSubmit={submitUsername}
              className="w-full flex flex-col gap-4"
            >
              <div className=" flex flex-col gap-4">
                <label className="font-medium">Username</label>
                <input
                  type="email"
                  name="user_name"
                  value={checkUsername.user_name}
                  onChange={handleCheckUsername}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                />
              </div>

              <small className=" text-red-600">{message}</small>

              <button className="rounded-md h-10 px-2 bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    width="50"
                    color="#ffffff"
                    ariaLabel="infinity-spin-loading"
                  />
                ) : (
                  <p>Reset</p>
                )}
              </button>
            </form>
          )}

          {/* checkcode sent to user's email */}
          {trackUsername && (
            <form
              onSubmit={submitVerificationCode}
              className={
                trackVerificationCode ? "hidden" : "flex flex-col gap-4"
              }
            >
              <div className=" flex flex-col gap-4">
                <label className="font-medium">Enter Verification Code</label>
                <input
                  type="number"
                  name="code"
                  value={verifyCode.code}
                  onChange={handleVerificationCode}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                />
              </div>
              <p>The Verification Code expires in 3 Minutes</p>

              <small className=" text-red-600">{message}</small>

              <button className="rounded-md h-10 px-2 bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    width="50"
                    color="#ffffff"
                    ariaLabel="infinity-spin-loading"
                  />
                ) : (
                  <p>Submit</p>
                )}
              </button>
            </form>
          )}

          {/* change password */}
          {trackVerificationCode && (
            <form
              onSubmit={submitUpdatePassword}
              className={
                passwordChangeTracker ? "hidden" : "flex flex-col gap-4"
              }
            >
              <div className=" flex flex-col gap-4">
                <label className="font-medium">Enter New Password</label>
                <input
                  type="password"
                  name="user_password"
                  value={UpdatePassword.user_password}
                  onChange={handleUpdatePassword}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                />
              </div>

              <small className=" text-red-600">{message}</small>

              <button className="rounded-md h-10 px-2 bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    width="50"
                    color="#ffffff"
                    ariaLabel="infinity-spin-loading"
                  />
                ) : (
                  <p>Reset</p>
                )}
              </button>
            </form>
          )}

          {/* after password has been changed */}
          {passwordChangeTracker && (
            <div className="flex flex-col">
              <p className="font-bold p-2">
                You have Sucessfully Changed Your Password
              </p>
              <a
                href="/user/signin"
                className="rounded-md h-10 p-2 bg-blue-500 text-white font-medium hover:bg-blue-600 text-center"
              >
                Sign in
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default UserForgotPassword;
