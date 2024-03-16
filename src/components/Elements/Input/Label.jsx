const Label = ({ for: id, children }) => {
  return (
    <label htmlFor={id} className="block mb-2 text-sm font-bold text-gray-700">
      {children}
    </label>
  );
};

export default Label;
