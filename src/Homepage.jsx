import { useState } from "react";
import phone from "./assets/iphone.png";
import mobile from "./assets/mobile.jpg";
import { Footer } from "./components/Footer";
import { IoMdTrendingUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Homepage = () => {
  const slides = [
    {
      title: "UBIDS SRC AWARDS",
      description:
        "ipsum dolor sit, amet consectetur adipisicing elit, Voluptatibus aliquid, quibusdam molestiae repudiandae labore veltenetur, ad a numquam sapiente commodi asperiores cumque eos repellendus excepturi quos error in totam",
    },
    {
      title: "UENR NUGS AWARDS",
      description:
        "alkdfj quibusdam molestiae repudiandae labore veltenetur, ad a numquam sapiente commodi asperiores cumque eos repellendus excepturi quos error in totam Lorem ipsum dolor sit, amet consectetur adipisicing elit, Voluptatibus aliquid",
    },
    {
      title: "KNUST JCR AWARDS",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit, Voluptatibus aliquid, quibusdam molestiae repudiandae labore veltenetur, ad a numquam sapiente commodi asperiores cumque eos repellendus excepturi quos error in totam.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextText = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const currentButtonView =
    "rounded-full h-1 w-1 bg-black duration-300 ease-out";
  const nextButtonView =
    "rounded-full h-1 w-1 bg-black/50 duration-300 ease-in";

  const LatestBox = () => {
    return (
      <div className="bg-white/80 p-3 relative text-black/80 h-56 w-64 rounded-xl font-medium flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <IoMdTrendingUp />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              onClick={nextText}
              role="button"
              className="bg-[#54ea54] h-6 w-6 flex items-center justify-center rounded-full"
            >
              <IoIosArrowForward />
            </div>
            <div className="flex flex-col gap-1">
              <div
                className={
                  currentIndex === 1 ? currentButtonView : nextButtonView
                }
              ></div>
              <div
                className={
                  currentIndex === 0 ? currentButtonView : nextButtonView
                }
              ></div>
              <div
                className={
                  currentIndex === 2 ? currentButtonView : nextButtonView
                }
              ></div>
            </div>
          </div>
        </div>
        <p>Latest Polls</p>
        <hr></hr>
        {/* Current Polls */}
        <div className="relative">
          <div className="">
            <p className="text-xl">{slides[currentIndex].title}</p>
            <small className=" line-clamp-3 duration-500 ease-out">
              {slides[currentIndex].description}
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
        className={`text-white flex flex-col items-center justify-center p-2 md:p-8 min-h-[calc(100vh-616px)] relative bg-center bg-cover space-y-8`}
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
        </section>
      </main>

      <section className="p-3 md:p-8">
        <section className="h-96 bg-white rounded-3xl"></section>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
