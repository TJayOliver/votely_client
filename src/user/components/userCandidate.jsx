/* eslint-disable react/prop-types */
import { BackButton } from "./BackButton";
import { MdDeleteForever } from "react-icons/md";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios";

const UserCandidate = ({
  GoBack,
  userCategoryCandidate,
  handleCandidateImageName,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const deleteCandidate = async (candidate_id) => {
    try {
      await axios.delete(`${BASE_URL}/candidate/delete/${candidate_id}`);
      setSuccessMessage("Candidate Successfully Deleted");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className=" md:p-3 ">
      <BackButton onClick={GoBack} />
      <div className=" bg-violet-200 p-4 text-2xl font-bold Bebas mb-4">
        CANDIDATES AND THEIR CATEGORY
      </div>
      <div className=" border border-gray-200 rounded-md">
        <table className=" w-full md:min-w-full divide-y divide-gray-200">
          <thead className=" bg-gray-50">
            <tr className="">
              <th className="px-2 md:px-4 py-3 text-left text-sm md:text-md font-medium">
                Category Name
              </th>
              <th className="px-2 md:px-4 py-3 text-left text-sm md:text-md font-medium">
                Name
              </th>
              <th className="px-2 md:px-4 py-3 text-left text-sm md:text-md font-medium">
                Profile
              </th>
              <th className="px-2 md:px-4 py-3 text-left text-sm md:text-md font-medium">
                Picture
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userCategoryCandidate.length === 0 ? (
              <tr>
                <td className="px-2 md:px-4 py-4 text-left text-md font-medium">
                  No Data Available
                </td>
              </tr>
            ) : (
              userCategoryCandidate.map((candidate, id) => (
                <tr key={id} className=" hover:bg-gray-50 ">
                  <td className="px-2 md:px-4 py-4 text-left text-sm md:text-md font-medium">
                    {candidate.category_name}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-left text-sm md:text-md font-medium">
                    {candidate.candidate_name}
                  </td>
                  <td className="px-2 md:px-4 py-4 text-left text-sm md:text-md font-medium">
                    {candidate.candidate_profile}
                  </td>
                  <td className=" px-2 md:px-4 text-left text-sm md:text-md font-medium">
                    <img
                      onClick={() => handleCandidateImageName(candidate.image)}
                      loading="lazy"
                      className="h-10 w-10 object-cover rounded-full"
                      src={`${BASE_URL}/upload/${candidate.image}`}
                    />
                  </td>

                  <td className="gap-2 py-2 text-left text-md font-medium">
                    <MdDeleteForever
                      role="button"
                      className="text-2xl text-red-600 hover:text-red-700"
                      onClick={() => deleteCandidate(candidate.candidate_id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCandidate;
