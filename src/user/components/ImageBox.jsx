import { RiCloseCircleFill } from "react-icons/ri";

// eslint-disable-next-line no-unused-vars, react/prop-types
export const ImageBox = ({ tracker, BASE_URL, image, close }) => {
  return (
    <section
      className={
        tracker
          ? "h-screen bg-black/50 backdrop-blur-sm z-[99] fixed w-full"
          : "hidden"
      }
    >
      <div className="w-full p-2 h-[35rem] rounded-lg grid place-content-center m-auto top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 absolute ">
        <img
          loading="lazy"
          src={`${BASE_URL}/upload/${image}`}
          className="w-[35rem] h-[35rem] object-cover rounded-lg mb-2"
        />
        <div className="rounded-full p-2 text-5xl flex justify-center font-medium ">
          <RiCloseCircleFill
            role="button"
            onClick={close}
            className="text-white hover:text-gray-200 "
          />
        </div>
      </div>
    </section>
  );
};
