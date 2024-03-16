import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-2 text-5xl font-bold text-blue-950">404</h1>
      <p className="text-2xl font-semibold">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
