import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <>
      <div className="">profile si {username},</div>
      <Link to="/product" className="font-bold text-blue-500">
        product
      </Link>
    </>
  );
};

export default ProfilePage;
