import { BASE_URL } from "../../../configurations/URL";

// eslint-disable-next-line react/prop-types
export const CandidateBox = ({ color, name, profile, vote, image, link }) => {
  return (
    <div
      className={` md:w-2/4 flex flex-wrap-reverse md:flex md:flex-nowrap justify-between gap-2 rounded-3xl p-8 bg-[#F5F5F5] hover:bg-[${color}]`}
    >
      <div className="flex flex-col justify-between w-full gap-2">
        <p className=" font-bold text-3xl">{name}</p>
        <p className="font-medium text-justify w-full">{profile}</p>
        <div className="flex gap-2 items-center justify-center">
          <a
            href={link}
            className="bg-[#222831] hover:bg-[#2c323a] duration-75 ease-in w-2/4 rounded-lg h-14 font-bold text-white text-xl flex items-center justify-center"
          >
            Vote
          </a>
          <div className="bg-white rounded-lg w-2/4 h-14 font-medium text-xl justify-center flex items-center">
            {vote === null ? 0 : vote}
          </div>
        </div>
      </div>

      <img
        src={`${BASE_URL}/upload/${image}`}
        className="h-80 w-full rounded-lg bg-white object-cover hover:scale-[1.1] hover:drop-shadow-sm hover:duration-300 hover:ease-out"
      />
    </div>
  );
};
