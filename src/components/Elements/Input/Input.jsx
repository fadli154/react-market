const Input = ({ type, placeholder, name }) => {
  return <input type={type} id={name} name={name} placeholder={placeholder} className="w-full px-3 py-2 text-gray-700 border rounded-md shadow outline-none focus:shadow-outline focus:border focus:border-blue-700" />;
};

export default Input;
