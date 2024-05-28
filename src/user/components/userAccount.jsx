/* eslint-disable react/prop-types */
import { BackButton } from "./BackButton";

const UserAccount = ({ GoBack }) => {
  return (
    <section className=" p-3">
      <BackButton onClick={GoBack} />
      <section className="bg-yellow-500 p-4 text-2xl font-bold Bebas mb-4">
        USER ACCOUNT
      </section>
    </section>
  );
};

export default UserAccount;
