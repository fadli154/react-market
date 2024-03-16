import { Link } from "react-router-dom";

const AuthLayouts = ({ title, subTitle, children }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col justify-center">
        <div className="px-8 pt-6 pb-8 mb-4 w-[20rem] bg-white rounded-md shadow-xl border-t-2 border-blue-800">
          <h1 className="text-3xl font-bold text-blue-800 capitalize">{title}</h1>
          <h6 className="mb-5 text-sm text-gray-400">{subTitle}</h6>
          {children}
          <Navigation type={title} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type == "login") {
    return (
      <p className="mt-5 text-sm text-center text-gray-600">
        Don`t have an account?
        <Link to="/register" className="ml-1 font-bold text-blue-500">
          register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-5 text-sm text-center text-gray-600">
        have an account?
        <Link to="/login" className="ml-1 font-bold text-blue-500">
          login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
