export const Header = () => {
  return (
    <header className="top-0 z-50 sticky flex justify-between items-center bg-[#272829] px-4 py-2 h-[5rem] text-white overflow-hidden">
      <h1 className="font-mineBold text-4xl">Votely</h1>
      <ul className="md:flex justify-between gap-3 hidden">
        <a
          href="/"
          className="hover:text-gray-300 hover:duration-100 hover:ease-out cursor-pointer"
        >
          Home
        </a>
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
  );
};
