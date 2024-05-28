import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pic from "../assets/9.jpg";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "../../configurations/URL";

const UserSignIn = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    user_name: "",
    user_password: "",
  });

  const [success, setSuccess] = useState(false);
  const [Errormessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserCredentials = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitCredentials = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/user/signin`,
        userCredentials
      );
      const userID = response.data.user.user_id;
      setSuccess(true);
      navigate(`/user`, { state: userID });
    } catch (error) {
      if (error.response.status === 500) {
        setErrorMessage("Internal Server Error");
      }
      if (error.response.status === 401) {
        setErrorMessage("Incorrect Username or Password");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <main className="flex  h-screen justify-center">
        <section
          style={{ backgroundImage: `url('${pic}')` }}
          className="hidden md:flex object-cover  w-2/4"
        ></section>
        <section className="w-full md:w-2/4 bg-white px-8 flex flex-col">
          <div className="m-auto w-2/3">
            <div className=" md:flex md:flex-row flex flex-col justify-between mb-8 items-center">
              <p className=" text-5xl whitespace-nowrap font-mineBold">
                Votely
              </p>
              <small>@User Panel</small>
            </div>

            {Errormessage ? (
              <div
                className={
                  success
                    ? "hidden"
                    : "text-white bg-red-500 text-center rounded-md p-2 font-medium mb-2"
                }
              >
                {Errormessage}
              </div>
            ) : null}

            <form onSubmit={submitCredentials} className="flex flex-col gap-8">
              <div className=" flex flex-col gap-4">
                <label className="font-medium">Username</label>
                <input
                  type="email"
                  name="user_name"
                  value={userCredentials.user_name}
                  onChange={handleUserCredentials}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                />
              </div>

              <div className=" flex flex-col gap-4">
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  name="user_password"
                  value={userCredentials.user_password}
                  onChange={handleUserCredentials}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                />
              </div>

              <a
                href="/user/forgotpassword"
                className=" flex justify-center font-medium hover:text-teal-700"
              >
                Forgot Password?
              </a>
              <button className="rounded-md h-10 px-2 bg-[#222831] flex items-center justify-center text-white font-medium hover:bg-[#2c323a]">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    width="50"
                    color="#ffffff"
                    ariaLabel="infinity-spin-loading"
                  />
                ) : (
                  <p>Sign In</p>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserSignIn;
