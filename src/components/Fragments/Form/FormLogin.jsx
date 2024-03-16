import Input from "../../Elements/Input/Index";
import Button from "../../Elements/Button/Button";
import { authenticate } from "../../../Services/auth.service";
import { useState } from "react";

const Form = () => {
  const [failedLogin, setFailedLogin] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    authenticate(data, (status, callback) => {
      if (status) {
        localStorage.setItem("token", callback);
        window.location.href = "/product";
      } else {
        setFailedLogin(callback);
      }
    });
  };

  return (
    <>
      <form action="" onSubmit={handleLogin}>
        <Input type="text" name="username" label="Username" placeholder="Username" />
        <Input type="password" name="password" label="Password" className="mt-3 mb-8" placeholder="*******" />

        <Button type="submit" variant="bg-blue-600" textColor="text-white" width="w-full">
          Login
        </Button>
        <p className="mt-4 text-sm text-center text-red-500">{failedLogin}</p>
      </form>
    </>
  );
};

export default Form;
