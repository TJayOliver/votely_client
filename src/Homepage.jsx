/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import voting1 from "./assets/v1.jpg";
import voting2 from "./assets/v2.jpg";
import voting3 from "./assets/v3.jpg";
import voting4 from "./assets/v4.jpg";
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer";

const HomepageSections = ({
  buttonName,
  title,
  color,
  buttonColor,
  buttonTextColor,
  buttonHoverColor,
  to,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center border-[1px] border-gray-300 ${color} p-2 rounded-lg w-72 h-48`}
    >
      <p className="w-24 font-medium text-center">{title}</p>
      <a
        href={to}
        className={`${buttonColor} text-center p-3 rounded-lg w-2/4 font-medium hover:duration-100 hover:ease-in hover:${buttonHoverColor} ${buttonTextColor}`}
      >
        {buttonName}
      </a>
    </div>
  );
};

const Homepage = () => {
  // const [hamburger, setHamburger] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true);
  const hideSearchIcon = () => {
    setSearchIcon(false);
  };
  const displaySearchIcon = () => {
    setSearchIcon(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [voting1, voting2, voting3, voting4];
  const [slide, setSlide] = useState(images[0]);
  const countRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      countRef.current = (countRef.current + 1) % images.length;
      setSlide(images[countRef.current]);
    }, 50000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <Header />
      {/* banner */}
      <aside className="top-0 left-0 -z-50 fixed w-screen h-screen overflow-hidden">
        <img src={voting1} className="absolute inset-0 w-full h-full object-cover" />
      </aside>

      <main className="flex flex-col md:gap-8 m-auto mb-14 max-w-7xl">
        {/* heading */}
        <section className="relative items-center place-content-center gap-8 grid p-4 text-center Outfit">
          <div className="drop-shadow-sm text-white">
            <p className="font-medium text-xl md:text-3xl">Welcome to</p>
            <div className="flex flex-col items-center text-5xl md:text-8xl Pacifico">
              <p>The New Way</p>
              <p>of Voting</p>
            </div>
          </div>
        </section>

        {/* search form */}
        <section className="flex p-2 w-full">
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

        {/* menus */}
        <section className="flex md:flex md:flex-row flex-col flex-wrap justify-between md:justify-around items-center gap-4 p-2">
          <HomepageSections
            buttonName={"Sign Up"}
            title={"Sign Up to Create a Poll"}
            color={"bg-[#E7D4B5]"}
            buttonColor={"bg-[#f1eaea]"}
            buttonHoverColor={"bg-gray-100"}
            to={"/user/registration"}
          />
          <HomepageSections
            buttonName={"Explore"}
            title={"Explore Recent Competitions"}
            color={"bg-gray-200"}
            buttonColor={"bg-[#272829]"}
            buttonHoverColor={"bg-[#272819]"}
            buttonTextColor={"text-white"}
            to={"/event"}
          />
          <HomepageSections
            buttonName={"Sign In"}
            title={"Log In and enjoy the experience"}
            color={"bg-[#B6C7AA]"}
            buttonColor={"bg-[#f1eaea]"}
            buttonHoverColor={"bg-gray-100"}
            to={"/user/signin"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
