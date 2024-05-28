/* eslint-disable react/prop-types */
import { BackButton } from "./BackButton";
import { TextInput } from "../userRegistration";
import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { BASE_URL } from "../../../configurations/URL";

const UserModify = ({ GoBack, UserID, setSuccessMessage, setErrorMessage }) => {
  const [userDetails, setUserDetails] = useState({
    organization_name: "",
    price_per_vote: 0,
    vote_deadline: "",
    about: "",
    user_id: UserID,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/edit/${UserID}`);
        const retrievedData = response.data.data[0];
        setUserDetails({
          organization_name: retrievedData.organization_name,
          price_per_vote: retrievedData.price_per_vote,
          vote_deadline: retrievedData.vote_deadline,
          about: retrievedData.about,
        });
      } catch (error) {
        setErrorMessage(error.response.data.error);
      }
    };
    getDetails();
  }, [UserID]);

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`${BASE_URL}/user/update`, userDetails);
      if (response.data.message) {
        setLoading(false);
        setSuccessMessage("You Have Successfully Updated Your Account Details");
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.response.data.error);
    }
  };

  return (
    <section className=" p-3">
      <BackButton onClick={GoBack} />
      <section className="bg-violet-200 p-4 text-2xl font-bold Bebas mb-4">
        MODIFY ACCOUNT
      </section>
      <section>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <TextInput
            type="text"
            label="Organization Name"
            name="organization_name"
            value={userDetails.organization_name}
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

          <button className="rounded-md h-10 px-2 flex items-center justify-center text-white font-medium bg-[#222831] hover:bg-[#2c323a]">
            {loading ? (
              <ThreeDots
                visible={true}
                width="50"
                color="#ffffff"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              <p>Update</p>
            )}
          </button>
        </form>
      </section>
    </section>
  );
};

export default UserModify;
