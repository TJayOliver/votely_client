import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchByID } from "../../configurations/fetch.js";
import axios from "axios";
import { BASE_URL } from "../../configurations/URL.js";
import { Header } from "./components/Header.jsx";
import { CandidateBox } from "./components/CandidateBox.jsx";
import pic1 from "../assets/Slides/s1.jpg";
import pic2 from "../assets/Slides/s2.jpg";
import pic3 from "../assets/Slides/s3.jpg";
import pic4 from "../assets/Slides/s4.jpg";
import pic5 from "../assets/Slides/s5.png";
import { Footer } from "../components/Footer.jsx";

const Event = () => {
  const setLink = useParams();
  const link = setLink.link;
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [resource, setResource] = useState([]);
  const [profile, setProfile] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [userHasResource, SetUserHasResource] = useState(false);
  const [categoryCandidate, setCategoryCandidate] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [slideShow, setSlideShow] = useState(0);

  // use link from params to verify link and ensure user has created category and candidates
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getActiveLink = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/event/${link}`, {
          signal,
        });
        if (response.data.message) {
          if (!response.data.data) {
            navigate("/");
          } else {
            setResource(response.data.data);
            setLoading(false);
            if (response.data.data.length === 0) {
              navigate("/");
            } else {
              SetUserHasResource(true);
            }
          }
        }
      } catch (error) {
        setLoading(false);
        setMessage(error.message);
      }
    };
    getActiveLink();
    return () => controller.abort();
  }, [link, navigate]);

  // fetch user profile and categories
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchByID("event/profile", link, setProfile, setLoading, setMessage, signal);
    fetchByID("event/category", link, setCategoryName, setLoading, setMessage, signal);
    return () => controller.abort();
  }, [link]);

  const fetchCategoryData = async (categoryName) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/category/${categoryName}`);
      const data = response.data.data;
      setCategoryCandidate((prevData) => ({
        ...prevData,
        [categoryName]: data,
      }));
    } catch (error) {
      console.error("Error fetching related content:", error);
    }
  };

  useEffect(() => {
    categoryName.forEach((category) => {
      if (!categoryCandidate[category.category_name]) {
        fetchCategoryData(category.category_name);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const image = [pic1, pic2, pic3, pic4, pic5];

  useEffect(() => {
    const slides = setInterval(() => {
      const number = Math.floor(Math.random() * image.length);
      setSlideShow(number);
    }, 10000);

    return () => clearInterval(slides);
  }, [image]);

  return (
    <>
      {userHasResource && (
        <>
          <Header scrollPosition={scrollPosition} />
          <main className="flex flex-col justify-between gap-10">
            {/* organization profile */}
            <section className="relative flex bg-[#C40C0C] p-8 w-full h-80">
              <img
                src={image[slideShow]}
                className="top-0 left-0 absolute opacity-50 w-full h-full duration-300 ease-out object-cover"
              />
              <div className="md:top-28 left-2/4 absolute bg-white shadow-sm p-4 md:p-14 rounded-lg w-[80%] md:w-full max-w-7xl h-[20rem] md:h-auto -translate-x-2/4 duration-100 ease-in">
                {profile.map((profile, id) => (
                  <div key={id} className="flex flex-col justify-between gap-2">
                    <h1 className="text-3xl text-black md:text-5xl Bebas">
                      {profile.organization_name} POLLS
                    </h1>
                    <p className="text-black text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus
                      odit ipsam nam. Cumque quae quos id expedita impedit numquam molestias ratione
                      enim, fugit neque ipsam nostrum animi mollitia eligendi.
                      {profile.about}
                    </p>
                    <p className="font-semibold text-black text-justify">
                      Poll ends on {profile.vote_deadline}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* categories and candidates */}
            <section className="flex flex-col justify-center gap-4 m-auto p-3 max-w-7xl">
              {Object.entries(categoryCandidate).map(([categoryName, content], id) => (
                <div key={id} className="flex flex-col gap-4 p-2">
                  <div className="bg-[#e1dbd4] p-3 font-bold text-2xl Bebas">
                    <p>{categoryName}</p>
                  </div>
                  <div className="flex md:flex md:flex-row flex-col justify-between gap-4">
                    {content.map((content, id) => (
                      <CandidateBox
                        key={id}
                        color={`#8AF9B3`}
                        name={content.candidate_name}
                        profile={content.candidate_profile}
                        vote={content.number_of_vote}
                        image={content.image}
                        link={`/event/${link}/vote/${content.candidate_id}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Event;
