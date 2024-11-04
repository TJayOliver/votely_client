import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { useState, useEffect } from "react";
import pic from '../assets/v1.jpg'
const EventBox = ()=> {
  return (
    <div className="h-44 w-full md:w-64 border border-black shrink-0">
      <img src={pic} className="h-2/4 w-full object-cover mb-4"/>
      <a className="text-center text-lg font-medium flex justify-center">University of Energy and Natural Resources</a>
    </div>
  )
}
const AllEvents = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header scrollPosition={scrollPosition} />
      <main className="flex flex-col justify-center gap-4 m-auto p-3 max-w-7xl">
        <section className="flex flex-wrap gap-10 m-auto justify-center">
          <EventBox/>
          <EventBox/>
          <EventBox/>
          <EventBox/>
          <EventBox/>
          <EventBox/>
          <EventBox/>
          <EventBox/>
        </section>
        
      </main>
      <Footer />
    </>
  );
};

export default AllEvents;
