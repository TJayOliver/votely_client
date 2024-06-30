/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import video from "./assets/video.mp4";
import { CiSearch } from "react-icons/ci";
import voting1 from "./assets/v1.jpg";
import voting2 from "./assets/v2.jpg";
import voting3 from "./assets/v3.jpg";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoMailOpen } from "react-icons/io5";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

const HomepageSections = ({
  buttonName,
  title,
  color,
  buttonColor,
  buttonTextColor,
  buttonHoverColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center border-[1px] border-gray-300 ${color} p-2 rounded-lg w-72 h-48`}
    >
      <p className="w-24 font-medium text-center">{title}</p>
      <button
        className={`${buttonColor} p-3 rounded-lg w-2/4 font-medium hover:duration-100 hover:ease-in hover:${buttonHoverColor} ${buttonTextColor}`}
      >
        {buttonName}
      </button>
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
  const images = [voting1, voting2, voting3];
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
      <header className="top-0 z-50 sticky flex justify-between items-center bg-[#272829] p-2 h-[5rem] text-white overflow-hidden">
        <h1 className="text-xl">Votely</h1>
        <ul className="md:flex justify-between gap-3 hidden">
          <a
            href="/about"
            className="hover:text-gray-300 hover:duration-100 hover:ease-out cursor-pointer"
          >
            About
          </a>

          <a
            href="/about"
            className="hover:text-gray-300 hover:duration-100 hover:ease-out cursor-pointer"
          >
            Contact Us
          </a>
          <a
            href="/about"
            className="hover:text-gray-300 hover:duration-100 hover:ease-out cursor-pointer"
          >
            Terms and Conditions
          </a>
        </ul>
      </header>

      {/* banner */}
      <aside className="relative rounded-b-lg h-64 overflow-hidden">
        <img
          loading="lazy"
          src={slide}
          className="absolute inset-0 opacity-100 w-full h-full transition-opacity duration-1000 ease-out object-cover"
          alt="Slideshow"
        />
      </aside>

      <main className="flex flex-col md:gap-8 m-auto mb-14 max-w-7xl">
        {/* background video */}
        <section className="top-0 left-0 -z-50 absolute w-full h-full overflow-hidden">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* heading */}
        <section className="relative items-center place-content-center gap-8 grid md:py-12 p-8 text-center Outfit">
          <div className="text-[#272829]">
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
        <section className="flex md:flex md:flex-row flex-col justify-between md:justify-around items-center gap-4 p-2">
          <HomepageSections
            buttonName={"Sign Up"}
            title={"Sign Up to Create a Poll"}
            color={"bg-[#E7D4B5]"}
            buttonColor={"bg-[#f1eaea]"}
            buttonHoverColor={"bg-gray-100"}
          />
          <HomepageSections
            buttonName={"Explore"}
            title={"Explore Recent Competitions"}
            color={"bg-gray-200"}
            buttonColor={"bg-[#272829]"}
            buttonHoverColor={"bg-[#272819]"}
            buttonTextColor={"text-white"}
          />
          <HomepageSections
            buttonName={"Create"}
            title={"Sign Up to Create a Poll"}
            color={"bg-[#B6C7AA]"}
            buttonColor={"bg-[#f1eaea]"}
            buttonHoverColor={"bg-gray-100"}
          />
        </section>
      </main>

      <footer className="flex md:flex md:flex-row flex-col justify-evenly gap-4 bg-[#272829] p-4 h-auto text-white">
        {/* contact */}
        <section className="flex flex-col gap-2">
          <h1 className="font-medium">Contact Us</h1>
          {/* Accra */}
          <div>
            <div className="flex items-center text-red-500">
              <IoLocationSharp />
              Accra, New Weija
            </div>
            <div className="flex items-center gap-1">
              <IoIosCall />
              <a href="tel:+233541666045" className="text-gray-300">
                +233541666045
              </a>
            </div>
            <p className="text-gray-300">Digital Address:BS-002145-23</p>
          </div>

          {/* Sunyani */}
          <div>
            <div className="flex items-center text-red-500">
              <IoLocationSharp />
              <p className="text-gray-300">Sunyani, Nkwabeng North</p>
            </div>
            <div className="flex items-center gap-1">
              <IoIosCall />
              <a href="tel:+233203695063" className="text-gray-300">
                +233203695063
              </a>
            </div>
            <p className="text-gray-300">Digital Address: GA-222-323</p>
          </div>

          {/* mail */}
          <div>
            <div className="flex items-center gap-1 text-red-500">
              <IoMailOpen /> Mail Us On
            </div>
            <a href="mail:votely@gmail.com" className="text-gray-300">
              votely@gmail.com
            </a>
          </div>
        </section>
        <hr className="flex md:hidden"></hr>
        {/* Links */}
        <section className="flex flex-col gap-2">
          <h1 className="font-medium">Link Directory</h1>
          <a href="/" className="text-gray-300 hover:text-red-600 duration-75">
            Home
          </a>
          <a href="/about#privacy" className="text-gray-300 hover:text-red-600 duration-75">
            Privacy Policy
          </a>
          <a href="/about#terms" className="text-gray-300 hover:text-red-600 duration-75">
            Terms & Condition
          </a>
          <a href="/events" className="text-gray-300 hover:text-red-600 duration-75">
            Events
          </a>
        </section>
        <hr className="flex md:hidden"></hr>
        {/* about */}
        <section className="flex flex-col gap-1">
          <h1 className="font-medium">About Us</h1>
          <div className="md:w-44 text-gray-300 text-justify">
            A seamless and reliable voting experience that ensures transparency and integrity for
            every poll. Our platform allows you to effortlessly set up and manage polls, making it
            easy for participants to cast their votes freely and securely.
          </div>
        </section>
      </footer>
    </>
  );
};

export default Homepage;
