import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../../configurations/URL";
import axios from "axios";
import { useEffect } from "react";

const Transaction = () => {
  const location = useLocation();
  const getRef = new URLSearchParams(location.search);
  const reference = getRef.get("reference");

  useEffect(() => {
    const submitReference = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/payment/verify`, {
          reference,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    submitReference();
  }, [reference]);

  return (
    <main>
      <p>Succesfully Voted : {reference}</p>
    </main>
  );
};

export default Transaction;
