const Button = (props) => {
  const { variant, textColor, children, width, type = "button", classname, onClick = () => {} } = props;

  return (
    <button type={type} onClick={onClick} className={`${variant} ${textColor} ${width} ${classname} font-bold py-2 px-4 rounded`}>
      {children}
    </button>
  );
};

export default Button;
