import { useLocation, useParams } from "react-router-dom";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios";
import { useEffect } from "react";

const Transaction = () => {
  const params = useParams();
  const candidate_id = params.candidate_id;
  const location = useLocation();
  const getRef = new URLSearchParams(location.search);
  const reference = getRef.get("reference");

  useEffect(() => {
    const submitReference = async () => {
      try {
        await axios.post(`${BASE_URL}/payment/verify`, {
          reference,
          candidate_id,
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    submitReference();
  }, [reference, candidate_id]);

  return (
    <main>
      <p>
        Succesfully Voted : {reference} {candidate_id}
      </p>
    </main>
  );
};

export default Transaction;
