/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { BackButton } from "./BackButton";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios"
import { useEffect } from "react";
import { fetchByID } from "../../../configurations/fetch";

// eslint-disable-next-line react/prop-types
const UserCategory = ({
  GoBack,
  userCategory,
  setSuccessMessage,
  setErrorMessage,
}) => {

  const deleteCategory = async (category_id) => {
    try {
      await axios.delete(`${BASE_URL}/category/delete/${category_id}`);
      setSuccessMessage("Category Succesfully Deleted");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <section className=" p-3">
      <BackButton onClick={GoBack} />
      <section className="bg-pink-300 p-4 text-2xl font-bold Bebas mb-4">
        CATEGORIES
      </section>
      <section className=" border border-gray-200 rounded-md">
        <table className=" min-w-full divide-y divide-gray-200">
          <thead className=" bg-gray-50">
            <tr>
              <th className="px-2 md:px-4 py-3 text-left text-md font-medium">
                Category Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userCategory.length === 0 ? (
              <tr>
                <td className="px-2 md:px-4 py-4 text-left text-md font-medium">
                  No Data Available
                </td>
              </tr>
            ) : (
              userCategory.map((category, id) => (
                <tr key={id} className=" hover:bg-gray-50">
                  <td className="px-2 md:px-4 py-4 text-left text-md font-medium">
                    {category.category_name}
                  </td>
                  <td className="flex flex-col md:flex md:flex-row gap-2 py-2 md:py-4 text-left text-md font-medium">
                    <MdDeleteForever
                      role="button"
                      className="text-2xl text-red-600 hover:text-red-700"
                      onClick={() => deleteCategory(category.category_id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default UserCategory;
