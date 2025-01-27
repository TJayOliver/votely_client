import { useState } from "react";
import phone from "./assets/iphone.png";
import { Footer } from "./components/Footer";
import { IoMdTrendingUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Homepage = () => {
  const [nextLatest, setNextLatest] = useState(false);
  let classNext = `absolute left-56 duration-100 ease-out  `;
  const swipeNext = () => {
    setNextLatest((prev) => !prev);
  };
  const LatestBox = () => {
    return (
      <div className="bg-white/80 p-3 relative text-black/80 h-56 w-64 rounded-xl font-medium flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <IoMdTrendingUp />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              onClick={swipeNext}
              role="button"
              className="bg-[#54ea54] h-6 w-6 flex items-center justify-center rounded-full"
            >
              <IoIosArrowForward />
            </div>
            <div className="flex flex-col gap-1">
              <div className="rounded-full h-1 w-1 bg-black"></div>
              <div className="rounded-full h-1 w-1 bg-black/50"></div>
              <div className="rounded-full h-1 w-1 bg-black/50"></div>
            </div>
          </div>
        </div>
        <p>Latest Polls</p>
        <hr></hr>
        <div className="relative">
          <div className="absolute hidden">
            <p className="text-xl">UENR NUGS AWARDS</p>
            <small className=" line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus aliquid, quibusdam molestiae repudiandae labore vel
              tenetur, ad a numquam sapiente commodi asperiores cumque eos
              repellendus excepturi quos error in totam.
            </small>
          </div>
          <div className="absolute hidden">
            <p className="text-xl">UENR NUGS AWARDS</p>
            <small className=" line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus aliquid, quibusdam molestiae repudiandae labore vel
              tenetur, ad a numquam sapiente commodi asperiores cumque eos
              repellendus excepturi quos error in totam.
            </small>
          </div>
          <div className="">
            <p className="text-xl">UENR NUGS AWARDS</p>
            <small className=" line-clamp-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus aliquid, quibusdam molestiae repudiandae labore vel
              tenetur, ad a numquam sapiente commodi asperiores cumque eos
              repellendus excepturi quos error in totam.
            </small>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  };
  return (
    <>
      <header className="h-14 font-medium text-white flex justify-center md:justify-evenly p-4 sticky top-0 z-10 mb-8">
        <div className="flex space-x-4 justify-between items-center bg-white/30 backdrop-blur shadow-lg rounded-xl p-6 w-auto md:w-[40rem]">
          <h1 className=" font-mineBold">Votely</h1>
          <div className=" hidden  md:flex space-x-14">
            <p>Home</p>
            <p>Features</p>
            <p>Event</p>
            <p>About</p>
          </div>
          <button className="bg-[#54ea54] text-black text-sm flex items-center h-8 p-2 rounded-xl ">
            Sign in
          </button>
        </div>
      </header>

      <main
        className={`text-white flex flex-col items-center justify-center p-2 md:p-8 min-h-[calc(100vh-232px)] relative bg-center bg-cover space-y-8`}
      >
        <h2 className="text-3xl md:text-5xl Bebas text-center">
          "Where Every Vote <br></br> meets Technology"
        </h2>
        <section className="flex space-x-4">
          <button className="rounded-full text-black font-medium items-center text-sm p-2 bg-[#54ea54]">
            Explore Polls
          </button>
          <button className="rounded-full text-black font-medium items-center text-sm p-2 bg-white ">
            Create a Poll
          </button>
        </section>
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <LatestBox />
            <div className="bg-gradient-to-r from-sky-400 to-cyan-300 shadow-md h-56 w-64 rounded-xl "></div>
          </div>
          <img
            src={phone}
            className="object-cover bg-center h-[50rem] overflow-x-hidden"
          />
          <div className="bg-white h-96 w-64 rounded-xl "></div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
