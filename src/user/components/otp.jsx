/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../configurations/URL";
import { ThreeDots } from "react-loader-spinner";

const OneTimeVerification = ({
  UserName,
  setUserStatus,
  setSuccess,
  verified,
  errorMessage,
  setErrorMessage,
  setLoading,
  success,
  loading,
}) => {
  const [OTP, setOTP] = useState({ code: "" });
  const [resendMessage, setResendMessage] = useState(false);

  const handleOTP = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setOTP((prev) => ({
      ...prev,
      user_name: UserName,
      [name]: value,
    }));
  };

  const resendOTP = async () => {
    setLoading(true);
    try {
      const details = {
        user_name: UserName,
      };
      const response = await axios.post(`${BASE_URL}/otp/create`, details);
      if (response.data.message) {
        setResendMessage(true);
      }
    } catch (error) {
      setLoading(false);
      if (error.response.status === 500) {
        setResendMessage(false);
        setErrorMessage("Please Try Again");
      }
    }
  };

  const submitOTP = async (e) => {
    e.preventDefault();
    setLoading(false);
    try {
      const response = await axios.post(`${BASE_URL}/otp/verify`, OTP);
      if (response.data.message) {
        setUserStatus(true);
        setSuccess(true);
        window.location.reload();
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <section
      className={
        verified
          ? "hidden"
          : "md:w-2/4 bg-white px-8 flex flex-col justify-center m-auto"
      }
    >
      <div className="m-auto w-2/3">
        <div className=" md:flex md:flex-row flex flex-col justify-between mb-8 items-center">
          {!resendMessage ? (
            <p className=" text-xl font-bold md:text-5xl whitespace-nowrap">
              Verify Your Account
            </p>
          ) : (
            <p className=" text-xl md:text-5xl font-bold">
              A New Verification Code Has Been Sent To Your Account
            </p>
          )}
        </div>

        {errorMessage ? (
          <div
            className={
              success
                ? "hidden"
                : "text-white bg-red-500 text-center rounded-md p-2 font-medium mb-2"
            }
          >
            {errorMessage}
          </div>
        ) : null}

        <form onSubmit={submitOTP} className="flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            <label className="font-medium">
              Enter the One-Time Verification Code sent to the email address you
              provided
            </label>
            <input
              type="text"
              name="code"
              value={OTP.code}
              onChange={handleOTP}
              className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
            />
          </div>
          <button className="rounded-md h-10 px-2 bg-[#222831] hover:bg-[#2c323a] flex items-center justify-center text-white font-medium ">
            {loading ? (
              <ThreeDots
                visible={true}
                width="50"
                color="#ffffff"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              <p>Verify</p>
            )}
          </button>
        </form>

        <div
          onClick={resendOTP}
          role="button"
          className="mt-4 rounded-md h-10 px-2 bg-green-600 flex items-center justify-center text-white font-medium hover:bg-green-700"
        >
          {loading ? (
            <ThreeDots
              visible={true}
              width="50"
              color="#ffffff"
              ariaLabel="infinity-spin-loading"
            />
          ) : (
            <p>Resend Code</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OneTimeVerification;
