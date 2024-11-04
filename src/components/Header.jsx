// eslint-disable-next-line react/prop-types
export const Header = ({  scrollPosition }) => {
  return (
    <header
      className={
        scrollPosition < 100
          ? ` bg-[#222831] h-16 flex justify-evenly items-center sticky top-0 z-50 duration-100 ease-in`
          : ` bg-black/50 h-16 flex justify-evenly items-center sticky top-0 z-50 duration-100 ease-in`
      }
    >
      <h1 className=" font-mineBold text-4xl text-[#fff]">Votely</h1>
      <div className="hidden gap-4 md:flex items-center text-white">
        <a href="/" className=" active:text-yellow-300">Home</a>
        <a href="/event">Events</a>
        <a href="/about">Contact Us</a>
        <a href="">Terms & Conditions</a>
        {/* <p
          role="button"
          onClick={signOut}
          className="bg-[#31363F] drop-shadow-md rounded-2xl p-2 text-white"
        >
          Sign Out
        </p> */}
      </div>
    </header>
  );
};
