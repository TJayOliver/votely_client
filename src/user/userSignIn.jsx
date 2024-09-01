import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pic from "../assets/6.jpg";
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
      const response = await axios.post(`${BASE_URL}/user/signin`, userCredentials);
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
      <main className="flex justify-center h-screen">
        <section
          style={{ backgroundImage: `url('${pic}')` }}
          className="md:flex hidden w-2/4 object-cover"
        ></section>
        <section className="flex flex-col bg-white px-8 w-full md:w-2/4">
          <div className="m-auto w-2/3">
            <div className="flex md:flex md:flex-row flex-col justify-between items-center mb-8">
              <p className="font-mineBold text-5xl whitespace-nowrap">Votely</p>
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
              <div className="flex flex-col gap-4">
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="user_name"
                  value={userCredentials.user_name}
                  onChange={handleUserCredentials}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 px-2 rounded-md h-10 outline-none"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  name="user_password"
                  value={userCredentials.user_password}
                  onChange={handleUserCredentials}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 px-2 rounded-md h-10 outline-none"
                />
              </div>

              <a
                href="/user/forgotpassword"
                className="flex justify-center font-medium hover:text-teal-700"
              >
                Forgot Password?
              </a>
              <button className="flex justify-center items-center bg-[#222831] hover:bg-[#2c323a] px-2 rounded-md h-10 font-medium text-white">
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
