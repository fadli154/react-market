import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/Form/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="register" subTitle="Please, register for your account">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
