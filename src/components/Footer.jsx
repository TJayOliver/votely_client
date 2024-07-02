import { IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoMailOpen } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="flex md:flex md:flex-row flex-col justify-evenly gap-4 bg-[#272829] p-4 h-auto text-white">
      {/* contact */}
      <section className="flex flex-col gap-2">
        <h1 className="font-medium">Contact Us</h1>
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
        <a href="/privacy" className="text-gray-300 hover:text-red-600 duration-75">
          Privacy Policy
        </a>
        <a href="/about#terms" className="text-gray-300 hover:text-red-600 duration-75">
          Terms & Condition
        </a>
        <a href="/event" className="text-gray-300 hover:text-red-600 duration-75">
          Events
        </a>
      </section>
      <hr className="flex md:hidden"></hr>
      {/* about */}
      <section className="flex flex-col gap-1">
        <h1 className="font-medium">About Us</h1>
        <div className="md:w-64 text-gray-300">
          Our platform allows you to effortlessly set up and manage polls, making it easy for
          participants to cast their votes freely and securely.
        </div>
      </section>
    </footer>
  );
};
