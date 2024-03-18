import { Link } from "react-router-dom";
import Button from "../../Elements/Button/Button";

const CardProduct = ({ children, cardBorder }) => {
  return (
    <div className={`${cardBorder} shadow-lg p-4 rounded-md border-t-2 flex flex-col`}>
      <div className="flex flex-col justify-between"></div>
      {children}
    </div>
  );
};

const Header = ({ image, linkTo }) => {
  return (
    <Link to={`/detail-product/${linkTo}`}>
      <div className="w-full drop-shadow-lg">
        <img className="w-full h-[15rem] object-cover rounded-lg drop-shadow-lg" src={image} alt="Product1-img" />
      </div>
    </Link>
  );
};

const Body = ({ children, title, price, classname }) => {
  return (
    <>
      <div className={`${classname} leading-3 flex justify-between items-center `}>
        <div className="">
          <h2 className="text-lg font-semibold text-blue-900/80 line-clamp-1 w-[95%]">{title}</h2>
          <span className="text-sm font-semibold text-blue-900/50">{price.toLocaleString("us-US", { style: "currency", currency: "USD" })}</span>
        </div>
        <span className="text-base font-semibold text-blue-900/50">⭐5</span>
      </div>
      <p className="text-gray-500 line-clamp-3">{children}</p>
    </>
  );
};

const Footer = ({ children, classname, btnColor, btnShadow, handleAddToCart }) => {
  return (
    <Button variant={btnColor} width="w-full" onClick={handleAddToCart} textColor="text-white" classname={`${classname} text-sm shadow-lg  ${btnShadow}`}>
      {children}
    </Button>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
