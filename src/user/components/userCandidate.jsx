/* eslint-disable react/prop-types */
import { BackButton } from "./BackButton";
import { MdDeleteForever, MdCancel, MdCheckCircle } from "react-icons/md";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchByID } from "../../../configurations/fetch";
import { Loading } from "../../components/loading";

const ConfirmDeleteBox = ({confirmDeleteDisplay, deleteCandidateName, deleteCandidateID, deleteCandidate, cancelDelete}) => {
  return (
    <section className={confirmDeleteDisplay ? "flex fixed w-full h-full backdrop-blur-sm" : 'hidden'}>
      <div className="bg-gray-100 w-80 h-96 text-xl text-center m-auto">
          <div className="flex justify-center flex-col p-4 items-center gap-6">
            <MdDeleteForever className="text-6xl text-red-600"/>
            <p className="font-medium">Delete {deleteCandidateName}</p>
            <sm>Are you sure you want to delete this candidate?</sm>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button onClick={() => deleteCandidate(deleteCandidateID)} className="bg-red-600 text-white w-2/4 p-1 rounded-md">Delete</button>
            <button onClick={() => cancelDelete()} className="bg-[#222831] text-white w-2/4 p-1 rounded-md">Cancel</button>
          </div>
      </div>
    </section>
  )
}

const DeleteResponseBox = ({deleteResponse, errorMessage, successMessage}) => {
  return (
    <section className={ deleteResponse ? "flex fixed w-full h-full backdrop-blur-sm" : "hidden"}>
      <div className="bg-gray-100 w-96 h-auto text-xl text-center m-auto">
        {errorMessage &&
          <div className="flex justify-center flex-col p-4 items-center gap-6">
            <MdCancel className="text-6xl text-red-600"/>
            <p className="font-medium">Delete Unsuccessful</p>
            <sm>{errorMessage}</sm>
          </div>
          }
          {successMessage && 
          <div className="flex justify-center flex-col p-4 items-center gap-6">
            <MdCheckCircle className="text-6xl text-yellow-500"/>
            <p className="font-medium">Delete Successful</p>
            <sm>{successMessage}</sm>
          </div>
          }
      </div>
    </section>
  )
}

const UserCandidate = ({
  GoBack,
  UserID,
  handleCandidateImageName,
}) => {
  const [userCategoryCandidate, setUserCategoryCandidate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmDeleteDisplay, setConfirmDeleteDisplay] = useState(false);
  const [deleteCandidateName, setDeleteCandidateName] = useState(null);
  const [deleteCandidateID, setDeleteCandidateID] = useState(null);
  const [deleteResponse, setDeleteResponse] = useState(null)

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchByID(
      "user/candidate-category",
      UserID,
      setUserCategoryCandidate,
      setLoading,
      successMessage,
      signal
    ); 
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[UserID])

  const cancelDelete = () => setConfirmDeleteDisplay(false)  

  const handleConfirmDeleteBox = (candidate_id, candidate_name) => {
    setConfirmDeleteDisplay (true)
    setDeleteCandidateName(candidate_name)
    setDeleteCandidateID(candidate_id)
  }
  const deleteCandidate = async (candidate_id) => {
    try {
      await axios.delete(`${BASE_URL}/candidate/delete/${candidate_id}`);
      setConfirmDeleteDisplay (false)
      setSuccessMessage("Candidate Successfully Deleted");
      setDeleteResponse(true)
      setTimeout(() => {
        setDeleteResponse(false)
       }, 1500);
    } catch (error) {
      setConfirmDeleteDisplay (false)
      setErrorMessage(error.response.data.message);
      setDeleteResponse(true)
      setTimeout(() => {
        setDeleteResponse(false)
       }, 1500);
    }
  };

  return (
    <>
    <DeleteResponseBox 
      deleteResponse={deleteResponse} 
      errorMessage={errorMessage} 
      successMessage={successMessage}
    />

    <ConfirmDeleteBox 
      deleteCandidate={deleteCandidate} 
      confirmDeleteDisplay={confirmDeleteDisplay} 
      deleteCandidateID={deleteCandidateID} 
      deleteCandidateName={deleteCandidateName}
      cancelDelete={cancelDelete}
    />
    <main className=" md:p-3">
      <BackButton onClick={GoBack} />
      <section className=" bg-violet-200 p-4 text-2xl font-bold Bebas mb-4">
        CANDIDATES AND THEIR CATEGORY
      </section>
      <section className=" border border-gray-200 rounded-md">
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
              loading ? <Loading/> : userCategoryCandidate.map((candidate, id) => (
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
                      onClick={() => handleConfirmDeleteBox(candidate.candidate_id, candidate.candidate_name)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>
    </>
  );
};

export default UserCandidate;
