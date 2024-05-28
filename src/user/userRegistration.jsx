/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { BASE_URL } from "../../configurations/URL";
// eslint-disable-next-line react/prop-types
export const TextInput = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className=" flex flex-col gap-4">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10 placeholder:text-sm md:placeholder:text-md"
      />
    </div>
  );
};

const UserRegistration = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    user_name: "",
    user_password: "",
    organization_name: "",
    link: "",
    price_per_vote: 0,
    vote_deadline: "",
    about: "",
    confirm_password: "",
    status: "false",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState([]);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/create`, userDetails);
      if (response.data.message) {
        setLoading(false);
        setSuccessMessage(
          "You Have Successfully Registered, An OTP has been sent to your email address."
        );
        setTimeout(() => {
          navigate("/user/signin");
        }, 5000);
      }
    } catch (error) {
      if (error.response.status === 400) {
        setLoading(false);
        const errorMessages = error.response.data.errors.map(
          (error) => error.msg
        );
        setValidationError(errorMessages);
      }
      setLoading(false);
      setMessage(error.response.data.error);
    }
  };

  return (
    <main className="flex from-blue-600 to-gray-500 bg-gradient-to-tr h-full justify-center p-2">
      <section className="w-full h-full md:w-2/4 bg-white px-8 flex flex-col p-2 rounded-md gap-2">
        <h1 className=" font-mineBold text-center text-5xl p-2 py-3">Votely</h1>
        <h1 className="text-3xl p-4 font-bold text-center">
          Create an Account with Ease!
        </h1>
        {success ? (
          <div className="text-white bg-green-600 text-center rounded-md p-2 font-medium mb-2">
            {success}
          </div>
        ) : null}
        {message ? (
          <div
            className={
              success
                ? "hidden"
                : "text-white bg-red-500 text-center rounded-md p-2 font-medium mb-2"
            }
          >
            {message}
          </div>
        ) : null}
        {validationError.length > 0 ? (
          <div
            className={
              success
                ? "hidden"
                : "text-white bg-red-500 text-center rounded-md p-2 font-medium mb-2"
            }
          >
            {validationError.map((error, id) => (
              <p key={id}>{error}</p>
            ))}
          </div>
        ) : null}
        <form onSubmit={submitRegistration} className="flex flex-col gap-4">
          <TextInput
            type="email"
            label="Email Address"
            name="user_name"
            value={userDetails.user_name}
            onChange={handleUserDetails}
          />
          <TextInput
            type="password"
            label="Password"
            name="user_password"
            value={userDetails.user_password}
            onChange={handleUserDetails}
          />
          <TextInput
            type="password"
            label="Confirm Password"
            name="confirm_password"
            value={userDetails.confirm_password}
            onChange={handleUserDetails}
          />
          <TextInput
            type="text"
            label="Organization Name"
            name="organization_name"
            value={userDetails.organization_name}
            onChange={handleUserDetails}
          />
          <TextInput
            type="text"
            label="Link"
            name="link"
            placeholder="This Link will be public e.g www.votely.com/global/link"
            value={userDetails.link}
            onChange={handleUserDetails}
          />
          <TextInput
            type="date"
            label="Poll Deadline"
            name="vote_deadline"
            value={userDetails.vote_deadline}
            onChange={handleUserDetails}
          />

          <div className=" flex flex-col gap-4">
            <label className="font-medium">About Polls</label>
            <textarea
              name="about"
              placeholder="Description about Polls"
              value={userDetails.about}
              onChange={handleUserDetails}
              className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2"
            />
          </div>

          <TextInput
            type="number"
            label="Price Per Vote"
            name="price_per_vote"
            value={userDetails.price_per_vote}
            onChange={handleUserDetails}
          />

          <button className="rounded-md h-10 px-2 bg-[#222831] flex items-center justify-center text-white font-medium hover:bg-[#2c323a]">
            {loading ? (
              <ThreeDots
                visible={true}
                width="50"
                color="#ffffff"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              <p>Register</p>
            )}
          </button>
        </form>
      </section>
    </main>
  );
};

export default UserRegistration;
