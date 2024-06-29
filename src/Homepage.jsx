import { useState } from "react";
import video from "./assets/video.mp4";
import { CiSearch } from "react-icons/ci";

const Homepage = () => {
  // const [hamburger, setHamburger] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true);
  const hideSearchIcon = () => {
    setSearchIcon(false);
  };
  const displaySearchIcon = () => {
    setSearchIcon(true);
  };
  return (
    <>
      <header className="top-0 sticky flex justify-between items-center bg-black p-2 h-24 text-white">
        <h1 className="text-xl">Votely</h1>
        <ul className="flex justify-between gap-3">
          <li>About</li>
          <li>Competitions</li>
          <li>Contact Us</li>
          <li>Terms and Conditions</li>
        </ul>
      </header>
      <main>
        <section className="top-0 left-0 -z-50 absolute w-full h-full overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className="relative items-center place-content-center gap-8 grid py-14 text-center Outfit">
          <div>
            <p className="font-medium text-3xl">Welcome to</p>
            <div className="flex flex-col items-center text-8xl">
              <p>The New Way</p>
              <p>of Voting</p>
            </div>
          </div>
        </section>

        <section className="flex m-auto max-w-7xl">
          <form className="relative flex items-center w-full">
            <CiSearch className={searchIcon ? "right-4 absolute text-3xl " : "hidden"} />
            <input
              type="search"
              placeholder="Enter Event or Organizers Name"
              onFocus={hideSearchIcon}
              onBlur={displaySearchIcon}
              className="border-[0.5px] border-gray-400 bg-gray-50 focus:bg-gray-100 px-2 rounded-md w-full h-10 outline-none"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default Homepage;
