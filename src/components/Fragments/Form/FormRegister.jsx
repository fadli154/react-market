import Input from "../../Elements/Input/Index";
import Button from "../../Elements/Button/Button";

const Form = () => {
  return (
    <form action="">
      <Input type="text" name="name" label="Name" placeholder="name" />
      <Input type="email" name="email" label="Email" className="mt-3" placeholder="Email" />
      <Input type="password" name="password" label="Password" className="mt-3" placeholder="*******" />
      <Input type="password" name="confirm_password" label="Confirm Password" className="mt-3 mb-8" placeholder="*******" />

      <Button type="submit" variant="bg-blue-600" textColor="text-white" width="w-full">
        Register
      </Button>
    </form>
  );
};

export default Form;
