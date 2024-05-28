import { useEffect, useState } from "react";
import axios from "axios";
import { fetchByID } from "../../configurations/fetch";
import { useNavigate, useLocation } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { FaListCheck, FaListOl, FaUsers } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { FcOk, FcHighPriority } from "react-icons/fc";
import { RiEdit2Fill } from "react-icons/ri";
import { MenuBox } from "./components/MenuBox";
import { ImageBox } from "./components/ImageBox";
import { Header } from "./components/Header";
import { MessageBox } from "./components/MessageBox";
import { BASE_URL } from "../../configurations/URL";
import UserCategory from "./components/userCategory";
import UserCandidate from "./components/userCandidate";
import CategoryForm from "./components/forms/categoryForm";
import CandidateForm from "./components/forms/candidateForm";
import UserModify from "./components/userModify";
import OneTimeVerification from "./components/otp";
import UserAccount from "./components/userAccount";

const UserPage = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;

  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const [UserID, setUserID] = useState("");
  const [UserName, setUserName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");

  const [candidateTracker, setCandidateTracker] = useState(false);
  const [categoryTracker, setCategoryTracker] = useState(false);

  const [viewCategoryTracker, setViewCategoryTracker] = useState(false);
  const [viewCandidateTracker, setViewCandidateTracker] = useState(false);
  const [viewModifyTracker, setViewModifyTracker] = useState(false);
  const [viewAccountTracker, setViewAccountTracker] = useState(false);

  const [menu, setMenu] = useState(true);

  const [userProfile, setUserProfile] = useState([]);
  const [userCategory, setUserCategory] = useState([]);
  const [userCategoryCandidate, setUserCategoryCandidate] = useState([]);
  const [userStatus, setUserStatus] = useState(false);

  const [userLink, setUserLink] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/read/${id}`);
        if (response.data.message === true) {
          setUserID(id);
          setVerified(true);
        }
      } catch (error) {
        navigate("/user/signin");
      }
    };
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (verified === true) {
      const controller = new AbortController();
      const signal = controller.signal;

      fetchByID(
        "user/profile",
        UserID,
        setUserProfile,
        setLoading,
        setMessage,
        signal
      ); // user profile
      fetchByID(
        "category",
        UserID,
        setUserCategory,
        setLoading,
        setMessage,
        signal
      ); // user category
      fetchByID(
        "user/candidate/category",
        UserID,
        setUserCategoryCandidate,
        setLoading,
        setMessage,
        signal
      ); // user category candidate
      return () => controller.abort();
    }
  }, [verified, UserID, loading]);

  useEffect(() => {
    userProfile.map((status) => setUserStatus(status.status));
    userProfile.map((email) => setUserName(email.user_name));
    userProfile.map((link) => setUserLink(link.link));
  }, [userProfile]);

  const signOut = async () => {
    try {
      await axios.delete(`${BASE_URL}/logout/user`);
      navigate("/user/signin");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleCategoryTracker = () => {
    setCategoryTracker((prev) => !prev);
    setViewCandidateTracker(false);
    setViewCategoryTracker(false);
    setViewModifyTracker(false);
    setViewAccountTracker(false);
    setMenu(false);
  };

  const handleCandidateTracker = () => {
    setCandidateTracker((prev) => !prev);
    setViewCandidateTracker(false);
    setViewCategoryTracker(false);
    setViewModifyTracker(false);
    setViewAccountTracker(false);
    setMenu(false);
  };

  const handleViewCategory = () => {
    setViewCategoryTracker(true);
    setViewCandidateTracker(false);
    setViewModifyTracker(false);
    setViewAccountTracker(false);
    setMenu(false);
  };

  const handleViewCandidate = () => {
    setViewCandidateTracker(true);
    setViewCategoryTracker(false);
    setViewModifyTracker(false);
    setViewAccountTracker(false);
    setMenu(false);
  };

  const handleModify = () => {
    setViewModifyTracker(true);
    setViewCandidateTracker(false);
    setViewCategoryTracker(false);
    setViewAccountTracker(false);
    setMenu(false);
  };

  const handleAccount = () => {
    setViewAccountTracker(true);
    setViewModifyTracker(false);
    setViewCandidateTracker(false);
    setViewCategoryTracker(false);
    setMenu(false);
  };

  const GoBack = () => {
    setMenu(true);
    setViewCategoryTracker(false);
    setViewCandidateTracker(false);
    setCategoryTracker(false);
    setCandidateTracker(false);
    setViewModifyTracker(false);
    setViewAccountTracker(false);
  };

  const [candidateImageNameTracker, setCandidateImageNameTracker] =
    useState(false);
  const [candidateImageName, setCandidateImageName] = useState("");
  const handleCandidateImageName = (name) => {
    setCandidateImageNameTracker(true);
    setCandidateImageName(name);
  };

  const handleOKButton = () => window.location.reload();

  return (
    <>
      {errorMessage.length > 0 ? (
        <MessageBox
          message={errorMessage}
          icon={<FcHighPriority className="text-8xl" />}
          color="bg-red-500"
          onClick={handleOKButton}
        />
      ) : null}
      {successMessage.length > 0 ? (
        <MessageBox
          message={successMessage}
          icon={<FcOk className="text-8xl" />}
          color="bg-green-600"
          onClick={handleOKButton}
        />
      ) : null}

      {/* largely display candidates image */}
      <ImageBox
        tracker={candidateImageNameTracker}
        close={() => setCandidateImageNameTracker(false)}
        BASE_URL={BASE_URL}
        image={candidateImageName}
      />
      {verified && (
        <main className="relative ">
          {userStatus === "true" ? (
            <section className=" bg-gray-50 h-screen">
              <Header
                signOut={signOut}
                link={userLink}
                color={"bg-[#222831]"}
              />
              <section className="max-w-7xl m-auto flex flex-wrap flex-col p-2 gap-3">
                {/* Profile */}
                <div className={menu ? " p-8 " : "hidden"}>
                  {loading ? (
                    <p>Loading</p>
                  ) : (
                    userProfile.map((profile, id) => (
                      <div key={id} className="flex flex-col gap-4">
                        <h1 className="Outfit font-bold text-6xl ">
                          Welcome, {profile.organization_name}{" "}
                        </h1>
                        <p className="text-xl font-medium">
                          www.votely.com/global/{profile.link}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                {/* menus */}
                <div
                  className={
                    menu
                      ? "items-center flex flex-wrap gap-4 justify-between"
                      : "hidden"
                  }
                >
                  <MenuBox
                    title="ADD A CATEGORY"
                    info="Create a category to add various candidates"
                    color="bg-cyan-400"
                    icon={<BiSolidCategory />}
                    onClick={handleCategoryTracker}
                  />
                  <MenuBox
                    title="ADD A CANDIDATE"
                    info="Add Various Candidates to your Poll"
                    color="bg-green-400"
                    icon={<FaUsers />}
                    onClick={handleCandidateTracker}
                  />
                  <MenuBox
                    title="VIEW CATEGORY"
                    info="View all categories added"
                    color="bg-pink-300"
                    icon={<FaListOl />}
                    onClick={handleViewCategory}
                  />
                  <MenuBox
                    title="VIEW CANDIDATES"
                    info="View all candidates added"
                    color="bg-violet-200"
                    icon={<FaListCheck />}
                    onClick={handleViewCandidate}
                  />
                  <MenuBox
                    title="MODIFY"
                    info="Edit "
                    color="bg-violet-200"
                    icon={<RiEdit2Fill />}
                    onClick={handleModify}
                  />
                  <MenuBox
                    title="ACCOUNTS"
                    info="View all candidates added"
                    color="bg-yellow-500"
                    icon={<MdAccountCircle />}
                    // onClick={handleAccount}
                  />
                </div>

                {/* display category created by user */}
                {viewCategoryTracker && (
                  <UserCategory
                    GoBack={GoBack}
                    userCategory={userCategory}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                  />
                )}

                {/* display candidate and categories created by user */}
                {viewCandidateTracker && (
                  <UserCandidate
                    GoBack={GoBack}
                    userCategoryCandidate={userCategoryCandidate}
                    handleCandidateImageName={handleCandidateImageName}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                  />
                )}

                {/* modify categories and candidates created by user */}
                {viewModifyTracker && (
                  <UserModify
                    GoBack={GoBack}
                    UserID={UserID}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                  />
                )}

                {/* display account created by user */}
                {viewAccountTracker && (
                  <UserAccount
                    GoBack={GoBack}
                    userCategoryCandidate={userCategoryCandidate}
                    handleCandidateImageName={handleCandidateImageName}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                  />
                )}
                {/* forms */}

                {/* category creation form */}
                {categoryTracker && (
                  <CategoryForm
                    GoBack={GoBack}
                    UserID={UserID}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                    loading={loading}
                  />
                )}

                {/* candidate creation form */}
                {candidateTracker && (
                  <CandidateForm
                    GoBack={GoBack}
                    UserID={UserID}
                    userCategory={userCategory}
                    setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage}
                    loading={loading}
                  />
                )}
              </section>
            </section>
          ) : (
            // Account verification using otp
            <OneTimeVerification
              UserName={UserName}
              setUserStatus={setUserStatus}
              setSuccess={setSuccess}
              setErrorMessage={setErrorMessage}
              setLoading={setLoading}
              success={success}
              loading={loading}
            />
          )}
        </main>
      )}
    </>
  );
};

export default UserPage;
