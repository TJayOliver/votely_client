import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch } from "../../configurations/fetch";
import moment from "moment";
import { Header } from "./components/Header";
import { BASE_URL } from "../../configurations/URL";
import { ThreeDots } from "react-loader-spinner";
import Footer from "./components/Footer";

const VotePage = () => {
  const id = useParams();
  const candidateID = id.candidate_id;

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [candidateProfile, setCandidateProfile] = useState([]);
  const [pricePerVote, setPricePerVote] = useState([]);

  const [pollClosed, setPollClosed] = useState(false);
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
    const voteDeadline = pricePerVote.map((pricePerVote) => pricePerVote.vote_deadline);
    const currentDate = moment().format("YYYY-MM-DD");
    if (moment(currentDate).isAfter(voteDeadline[0])) {
      setPollClosed(true);
    }
  }, [pricePerVote]);

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
      {!pollClosed ? (
        <main className="bg-teal-500 grid place-content-center m-auto w-96 h-96">
          <p>Sorry Voting has Ended</p>
        </main>
      ) : (
        <main className=" max-w-7xl flex flex-col md:w-2/4 m-auto p-4">
          <section className="h-12 bg-red-400 p-3 mt-3 text-xl">
            <p className="font-medium text-black">Enter Vote</p>
          </section>

          <section className="max-w-7xl bg-[#E1F7F5] md:h-[35rem] flex flex-col-reverse md:flex md:flex-row gap-4 w-full mt-4 rounded-lg p-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {candidateProfile.map((candidate, id) => (
                  <p key={id} className="Outfit text-2xl">
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

              <form onSubmit={submitVote} className="flex flex-col gap-10 justify-between">
                <div className=" flex flex-col gap-4">
                  <label className="text-black text-xl font-bold">Enter Amount of Vote</label>
                  <input
                    type="number"
                    name="number_of_vote"
                    value={vote.number_of_vote}
                    onChange={handleVote}
                    className="border-[0.5px] bg-gray-50 focus:bg-gray-100 outline-none rounded-md px-2 h-10"
                  />
                  <p className="text-xl">
                    Total Cost: <b className="text-black">GHC {amount}</b>{" "}
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
                    <p>Next</p>
                  )}
                </button>
              </form>
            </div>

            {candidateProfile.map((candidate, id) => (
              <img
                key={id}
                src={`${BASE_URL}/upload/${candidate.image}`}
                className="h-full w-44 md:w-96 object-cover flex justify-center m-auto rounded-md"
              />
            ))}
          </section>
        </main>
      )}
      <Footer />
    </>
  );
};

export default VotePage;
