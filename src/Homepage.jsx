import { useEffect, useState } from "react";
import phone from "./assets/iphone.png";
import whiteBG from "./assets/13.jpg";
import momo from "./assets/momo.png";
import lady from "./assets/lady.png";
import { Footer } from "./components/Footer";
import { IoMdTrendingUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
  /* small button slides */
  const currentButtonView =
    "rounded-full h-1 w-1 bg-black duration-300 ease-out";
  const nextButtonView =
    "rounded-full h-1 w-1 bg-black/50 duration-300 ease-in";

  const [adIndex, setadIndex] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setadIndex((prev) => !prev);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const MomoPaymentsBox = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex md:flex-row justify-between items-center absolute"
      >
        <div className="flex flex-col gap-3 font-bold ">
          {/* mobile text */}
          <div className="text-2xl md:hidden flex flex-col items-center justify-center text-justify">
            <p>
              Secure Your Vote With Ease! Our platform integrates Mobile Money
              payments for a seamless voting experience. Pay and vote instantly!
            </p>
          </div>
          {/* lap-taps text */}
          <div className=" hidden md:flex md:flex-col">
            <p className="text-xl md:text-2xl">
              Secure Your Vote With Ease! <br></br>Our platform integrates
              Mobile Money payments for a seamless voting experience. <br></br>
              Pay and vote instantly!
            </p>
          </div>
        </div>
        <img src={momo} className="bg-cover scale-75 " />
      </motion.div>
    );
  };
  const OrganizerWithdrawalBox = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex md:flex-row items-center justify-between font-bold"
      >
        {/* mobile text */}
        <div className="text-2xl md:hidden flex flex-col items-center justify-center text-justify">
          <p>
            Fast & Hassle-free Withdrawals for Event organizers! Our platform
            allows Event Organizers withdraw money instantly to their wallets
            with just a single click
          </p>
        </div>
        {/* lap-taps text */}
        <div className="hidden md:flex flex-col gap-3 font-bold text-4xl">
          <p>Fast & hassle-free Withdrawals for Event organizers!</p>
          <p className="text-2xl">
            Our platform allows Event Organizers withdraw money instantly to
            their wallets with just a single click!
          </p>
        </div>
        <img src={lady} className="bg-contain md:h-96 " />
      </motion.div>
    );
  };
  const LatestBox = () => {
    return (
      <div className="bg-[#DABDA9] shadow-md p-3 relative text-black/80 h-56 w-64 rounded-xl font-medium flex flex-col justify-between">
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
            {/* dots */}
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
          <div className=" hidden space-x-4 md:flex md:space-x-14">
            <p>Home</p>
            <p>Event</p>
            <p>About</p>
          </div>
          <button className="bg-[#54ea54] text-black text-sm flex items-center h-8 p-2 rounded-xl ">
            Sign in
          </button>
        </div>
      </header>

      <main
        className={`text-white flex flex-col items-center justify-center p-2 md:p-8 min-h-[calc(100vh-616px)] relative bg-center bg-cover space-y-6`}
      >
        <h2 className="text-3xl md:text-5xl Bebas text-center">
          "Where Every Vote <br></br> meets Technology"
        </h2>

        {/* Explore & create polls */}
        <section className="flex space-x-4">
          <a
            href="/event"
            className="rounded-full text-black font-medium items-center text-sm p-2 bg-[#54ea54]"
          >
            Explore Polls
          </a>
          <a
            href="/user/registration"
            className="rounded-full text-black font-medium items-center text-sm p-2 bg-white "
          >
            Create a Poll
          </a>
        </section>

        {/* Image and latest box */}
        <section className="flex justify-between items-center">
          <div className="hidden md:flex flex-col gap-2">
            <LatestBox />
            <div className="bg-[#B8C0FF] shadow-md h-56 w-64 rounded-xl "></div>
          </div>
          <img src={phone} className="object-cover bg-center md:h-[50rem]" />
        </section>
      </main>

      {/* payment information */}
      <section className="p-3 md:p-8">
        <section
          style={{ backgroundImage: `url("${whiteBG}")` }}
          className="md:h-96 bg-white rounded-3xl p-4 md:p-8 flex bg-center bg-cover justify-between items-center relative"
        >
          <AnimatePresence mode="wait">
            {adIndex ? <MomoPaymentsBox /> : <OrganizerWithdrawalBox />}
          </AnimatePresence>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
