import Input from "./Input";
import Label from "./Label";

const FormInput = ({ name, type, className, label, placeholder }) => {
  return (
    <div className={className}>
      <Label for={name}>{label}</Label>
      <Input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
