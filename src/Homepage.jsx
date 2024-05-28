import phone4 from "./assets/p2.png";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { FaSquarePollVertical } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { RiUserFollowFill } from "react-icons/ri";
import { useState } from "react";

const Homepage = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <main className="h-screen relative bg-green-600">
      <section className="text-white flex justify-around items-center py-8">
        <h1 className="text-7xl font-mineBold">Votely</h1>
        <div className="hidden md:flex justify-between gap-5 font-medium">
          <a className="p-2 hover:bg-white hover:rounded-md hover:text-black h-8 flex justify-center items-center duration-100 ease-out">
            Create a Poll
          </a>
          <a className="p-2 hover:bg-white hover:rounded-md hover:text-black h-8 flex justify-center items-center duration-100 ease-in">
            Sign In
          </a>
        </div>
        <div
          role="button"
          onClick={() => setHamburger((prev) => !prev)}
          className="md:hidden flex gap-1 flex-col"
        >
          <div
            className={
              hamburger
                ? "h-1 w-8 rotate-45 -translate-y-0 bg-white  rounded-md ease-in duration-100"
                : "h-1 w-8 bg-white rounded-md translate-y-0 rotate-0 duration-150"
            }
          ></div>
          <div
            className={
              hamburger
                ? "h-1 w-8 -rotate-45 -translate-y-2 bg-white rounded-md ease-in duration-100"
                : "h-1 w-8 bg-white rounded-md translate-y-0 rotate-0 duration-150"
            }
          ></div>
          <div
            className={
              hamburger
                ? " -translate-y-8 opacity-0 duration-100 ease-in"
                : "h-1 w-8 bg-white rounded-md translate-y-0 duration-150 "
            }
          ></div>
        </div>
      </section>

      <section className="text-white text-4xl absolute top-2/4 -translate-y-2/4 -translate-x-2/4 left-2/4 flex  ">
        <div className="flex justify-center items-center">
          <img
            src={phone4}
            className="hidden md:flex object-cover h-screen drop-shadow-lg "
            loading="lazy "
          />
          <div className="flex flex-col justify-center">
            <small className=" text-md ">
              Experience the Confidence of Secure, Effortless,and Swift Voting!
            </small>
            <div className=" items-center justify-center ">
              <button className="text-sm p-3 bg-white rounded-lg text-black">
                Search for Polls
              </button>
              <input
                type="search"
                placeholder="Search for polls"
                className="hidden w-full p-3 rounded-xl text-black outline-none mt-4 bg-white drop-shadow-md focus-within:bg-white text-sm h-14 placeholder:text-sm placeholder:top-2/4 placeholder:-translate-y-2/4 placeholder:abos placeholder:flex placeholder:items-center placeholder:justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white h-36 w-full  flex justify-center absolute bottom-8 items-center text-xl">
        <div className="flex  gap-3 md:gap-8 text-sm ">
          <div>
            <div className="flex items-center justify-center gap-2">
              <HiMiniInformationCircle className="" />
              <p className="font-medium">About</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <FaSquarePollVertical className="" />
              <p className="font-medium">Recent Polls</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <SiSpringsecurity className="" />
              <p className="font-medium">Terms & Conditions</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <RiUserFollowFill className="" />
              <p className="font-medium">Follow Us</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
