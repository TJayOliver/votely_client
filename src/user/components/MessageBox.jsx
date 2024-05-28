// eslint-disable-next-line react/prop-types
export const MessageBox = ({ message, icon, color, onClick }) => {
  return (
    <section
      className={`h-[100dvh] bg-black/50 backdrop-blur-md z-[99] fixed w-full`}
    >
      <div className="bg-white shadow-md w-80 md:w-96 h-[28rem] rounded-lg top-2/4 -translate-y-2/4 left-2/4 p-8 -translate-x-2/4 absolute flex flex-col justify-between items-center">
        {icon}
        <p className="text-2xl font-medium text-justify text-black">
          {message}
        </p>
        <div
          role="button"
          onClick={onClick}
          className={`${color} text-white p-4 w-24 text-center font-bold rounded-lg`}
        >
          OK
        </div>
      </div>
    </section>
  );
};
