import axios from "axios";
import { BASE_URL } from "./URL";

export const fetch = async (
  link,
  setState,
  setLoading,
  setMessage,
  signall
) => {
  try {
    const response = await axios.get(`${BASE_URL}/${link}`, { signall });
    setState(response.data.data);
    setLoading(false);
    setMessage(response.data.message);
  } catch (error) {
    setLoading(false);
    //console.error(error.message)
  }
};

export const fetchByID = async (
  link,
  id,
  setState,
  setLoading,
  setMessage,
  signall
) => {
  try {
    const response = await axios.get(`${BASE_URL}/${link}/${id}`, { signall });
    setState(response.data.data);
    setLoading(false);
    setMessage(response.data.message);
  } catch (error) {
    //console.error(error.message)
  }
};
