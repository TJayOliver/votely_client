/* eslint-disable react/prop-types */
export const MenuBox = ({ title, info, color, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`h-24 w-full md:w-96 duration-100 ease-in p-4 border border-gray-200 rounded-lg hover:bg-gray-100 flex items-center gap-2 `}
    >
      <div
        className={`${color} h-16 w-16 rounded-md flex items-center justify-center text-3xl`}
      >
        {icon}
      </div>
      <div>
        <p className="Bebas text-3xl">{title}</p>
        <small className="Outfit">{info}</small>
      </div>
    </div>
  );
};
