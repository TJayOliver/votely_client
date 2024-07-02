// eslint-disable-next-line react/prop-types
export const Header = ({ signOut, scrollPosition }) => {
  return (
    <header
      className={
        scrollPosition < 100
          ? ` bg-[#222831] h-24 flex justify-evenly items-center sticky top-0 z-50 duration-100 ease-in`
          : ` bg-black/50 h-24 flex justify-evenly items-center sticky top-0 z-50 duration-100 ease-in`
      }
    >
      <h1 className=" font-mineBold text-5xl text-[#fff]">Votely</h1>
      <div className="gap-4">
        <p
          role="button"
          onClick={signOut}
          className="bg-[#31363F] drop-shadow-md rounded-2xl p-2 text-white"
        >
          Create Poll
        </p>
      </div>
    </header>
  );
};
