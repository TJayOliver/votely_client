// eslint-disable-next-line react/prop-types
const ErrorPage = ({ error }) => {
  console.log("Error occured", error);
  return (
    <div className="bg-red-600">
      <p className="">
        Something went wrong. Try clicking the refresh page button to reload the
        application. <button className="btn">Refresh page</button>
      </p>
    </div>
  );
};

export default ErrorPage;
