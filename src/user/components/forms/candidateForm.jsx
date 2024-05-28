/* eslint-disable react/prop-types */
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { BackButton } from "../BackButton";
import { BASE_URL } from "../../../../configurations/URL";
import axios from "axios";

const CandidateForm = ({
  GoBack,
  UserID,
  userCategory,
  setSuccessMessage,
  setErrorMessage,
  loading,
}) => {
  const [candidate, setCandidate] = useState({
    candidate_name: "",
    candidate_profile: "",
    user_id: "",
    category_id: "",
    image: null,
  });
  const handleCandidate = (e) => {
    const { name, value } = e.target;
    setCandidate((prev) => ({
      ...prev,
      user_id: UserID,
      [name]: value,
    }));
  };
  const FormFiles = (e) => {
    setCandidate({ ...candidate, image: e.target.files[0] });
  };
  const submitCandidate = async (e) => {
    e.preventDefault();

    const newFormData = new FormData();
    for (const key in candidate) {
      newFormData.append(key, candidate[key]);
    }
    try {
      await axios.post(`${BASE_URL}/candidate/create`, newFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMessage("Candidate Has Been Added");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.error);
      }
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data.error);
      }
    }
  };
  return (
    <div className=" m-auto w-full">
      <BackButton onClick={GoBack} />
      <p className=" text-5xl whitespace-nowrap Bebas mb-4">ADD A CANDIDATE</p>
      <form
        onSubmit={submitCandidate}
        encType="multipart/form-data"
        className="flex flex-col gap-8"
      >
        <div className=" flex flex-col gap-4">
          <label className="font-medium">Candidate Name</label>
          <input
            type="text"
            placeholder="Enter Candidates Name"
            name="candidate_name"
            value={candidate.candidate_name}
            onChange={handleCandidate}
            className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
          />
        </div>

        <div className=" flex flex-col gap-4">
          <label className="font-medium">Candidate Profile</label>
          <textarea
            name="candidate_profile"
            value={candidate.candidate_profile}
            onChange={handleCandidate}
            className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-20"
          />
        </div>

        <div className=" flex flex-col gap-4">
          <label className="font-medium">Category</label>
          <select
            className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
            name="category_id"
            value={candidate.category_id}
            onChange={handleCandidate}
          >
            <option disabled value="">
              --Select Category --
            </option>
            {userCategory.map((cat) => (
              <option key={cat.category_id} value={cat.category_id}>
                {cat.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className=" flex flex-col gap-4">
          <label className=" font-medium  " htmlFor="image">
            Upload Candidates Picture
          </label>
          <input
            className="block w-full text-md border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:bg-[#222831] file:text-white  file:font-medium file:p-2 file:border-0 file:outline-none file:"
            aria-describedby="image"
            id="image"
            name="image"
            onChange={FormFiles}
            type="file"
            accept=".jpg, .jpeg, .png, .JPG"
          />
          <p className="mt-1 text-sm" id="image">
            PNG, JPG or JPEG (MAX. 5MB).
          </p>
        </div>

        <button className="rounded-md h-10 px-2 bg-[#222831] flex items-center justify-center text-white font-medium hover:bg-[#2c323a]">
          {loading ? (
            <ThreeDots
              visible={true}
              width="50"
              color="#ffffff"
              ariaLabel="infinity-spin-loading"
            />
          ) : (
            <p>Add Candidate</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
