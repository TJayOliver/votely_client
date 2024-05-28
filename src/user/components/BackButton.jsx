/* eslint-disable react/prop-types */
import { IoIosArrowDropleftCircle } from "react-icons/io";

export const BackButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className="p-4  text-blue-600 w-24 rounded-md hover:underline font-bold flex items-center  text-md"
    >
      <IoIosArrowDropleftCircle />
      <small>Back</small>
    </div>
  );
};
