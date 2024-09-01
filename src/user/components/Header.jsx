// eslint-disable-next-line react/prop-types
export const Header = ({ signOut, link, color }) => {
  return (
    <header
      className={` ${color} h-24 flex justify-evenly items-center sticky top-0 z-50`}
    >
      <h1 className=" font-mineBold text-5xl text-[#fff]">Votely</h1>
      <div className="hidden md:flex justify-between gap-4">
        <a
          href={`/event/${link}`}
          className="bg-yellow-300 rounded-2xl p-2 font-medium"
        >
          View Page
        </a>

        <p
          role="button"
          onClick={signOut}
          className="bg-[#31363F] drop-shadow-md rounded-2xl p-2 text-white"
        >
          Log Out
        </p>
      </div>
    </header>
  );
};
