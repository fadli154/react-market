import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/Form/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="login" subTitle="Please, login to your account">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
