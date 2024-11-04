import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch } from "../../configurations/fetch";
import { Header } from "../components/Header.jsx"
import { BASE_URL } from "../../configurations/URL";
import { ThreeDots } from "react-loader-spinner";
import { Footer } from "../components/Footer";

const VotePage = () => {
  const id = useParams();
  const candidateID = id.candidate_id;
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [candidateProfile, setCandidateProfile] = useState([]);
  const [pricePerVote, setPricePerVote] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const voteCost = pricePerVote.map((pricePerVote) => pricePerVote.price_per_vote);

  // retrieving candidates profile
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`candidate/id/${candidateID}`, setCandidateProfile, setLoading, setMessage, signal);
    return () => controller.abort();
  }, [candidateID]);

  // retrieve user id from candidate profile
  useEffect(() => {
    const user_id = candidateProfile.map((res) => res.user_id);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`user/voteprice/${user_id[0]}`, setPricePerVote, setLoading, setMessage, signal);
    return () => controller.abort();
  }, [candidateProfile]);

  const [vote, setVote] = useState({
    number_of_vote: "",
  });
  const amount = vote.number_of_vote * Number(voteCost[0]);

  const handleVote = (e) => {
    const { name, value } = e.target;
    setVote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitVote = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/payment`, {
        number_of_vote: amount,
        candidate_id: candidateID,
      });
      if (response.status) {
        setLoading(false);
        const link = response.data.data.authorization_url;
        window.location.href = link;
      }
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header scrollPosition={scrollPosition} />
      <main className="flex flex-col m-auto p-4 md:w-2/4 max-w-7xl">
        <section className="bg-red-400 mt-3 p-3 h-12 text-xl">
          <p className="font-medium text-black">Enter Vote</p>
        </section>

        <section className="flex md:flex md:flex-row flex-col-reverse gap-4 bg-[#E1F7F5] mt-4 p-8 rounded-lg w-full max-w-7xl md:h-[35rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {candidateProfile.map((candidate, id) => (
                <p key={id} className="text-2xl Outfit">
                  You have selected to vote for <b>{candidate.candidate_name}</b>
                </p>
              ))}
              <p className="text-xl">
                Kindly note that, a vote costs{" "}
                <b className="text-red-600">
                  {pricePerVote.map((price) => price.price_per_vote)}
                </b>{" "}
              </p>
            </div>

            <form onSubmit={submitVote} className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-4">
                <label className="font-bold text-black text-xl">Enter Amount of Vote</label>
                <input
                  type="number"
                  name="number_of_vote"
                  value={vote.number_of_vote}
                  onChange={handleVote}
                  className="border-[0.5px] bg-gray-50 focus:bg-gray-100 px-2 rounded-md h-10 outline-none"
                />
                <p className="text-xl">
                  Total Cost: <b className="text-black">GHS {amount}</b>{" "}
                </p>
              </div>
              <button className="flex justify-center items-center bg-[#222831] hover:bg-[#2c323a] px-2 rounded-md h-10 font-medium text-white">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    width="50"
                    color="#ffffff"
                    ariaLabel="infinity-spin-loading"
                  />
                ) : (
                  <p>Next</p>
                )}
              </button>
            </form>
          </div>

          {candidateProfile.map((candidate, id) => (
            <img
              key={id}
              src={`${BASE_URL}/upload/${candidate.image}`}
              className=" rounded-md md:w-2/4 h-56 md:h-96 object-cover"
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VotePage;
