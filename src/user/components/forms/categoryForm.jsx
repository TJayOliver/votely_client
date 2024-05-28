/* eslint-disable react/prop-types */
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { BackButton } from "../BackButton";
import { BASE_URL } from "../../../../configurations/URL";
import axios from "axios";

const CategoryForm = ({
  GoBack,
  UserID,
  setSuccessMessage,
  setErrorMessage,
  loading,
}) => {
  const [category, setCategory] = useState({
    category_name: "",
    user_id: "",
  });
  const handleCategory = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      user_id: UserID,
      [name]: value,
    }));
  };
  const submitCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/category/create`, category);
      setSuccessMessage("Successfully Added Category");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Internal Server Error");
      }
    }
  };
  return (
    <section className=" m-auto w-full">
      <BackButton onClick={GoBack} />
      <p className=" text-5xl whitespace-nowrap Bebas mb-4">ADD A CATEGORY</p>
      <form onSubmit={submitCategory} className="flex flex-col gap-8">
        <div className=" flex flex-col gap-4">
          <label className="font-medium">Category Name</label>
          <input
            type="text"
            placeholder="Category Name"
            name="category_name"
            value={category.category_name}
            onChange={handleCategory}
            className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
          />
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
            <p>ADD</p>
          )}
        </button>
      </form>
    </section>
  );
};

export default CategoryForm;
