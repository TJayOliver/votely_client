import { useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../../components/Footer";

const Transaction = () => {
  const params = useParams();
  const candidate_id = params.candidate_id;
  const location = useLocation();
  const getRef = new URLSearchParams(location.search);
  const reference = getRef.get("reference");

  // useEffect(() => {
  //   const submitReference = async () => {
  //     try {
  //       await axios.post(`${BASE_URL}/payment/verify`, {
  //         reference,
  //         candidate_id,s
  //       });
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  //   submitReference();
  // }, [reference, candidate_id]);

  const [scrollPosition, setScrollPosition] = useState(0);

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
      <main></main>
      <Footer />
    </>
  );
};

export default Transaction;
