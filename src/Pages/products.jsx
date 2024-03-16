import { useEffect, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/Product/CardProduct";
import { getProduct } from "../Services/product.service";
import { getUsername } from "../Services/auth.service";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [Products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, [username]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  });

  useEffect(() => {
    if (Products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = Products.find((p) => p.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [Products, cart]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { id: id, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="w-full py-2 bg-blue-600">
        <div className="container flex items-center justify-end">
          <p className="mr-4 text-white">{username}</p>
          <Button variant="bg-red-600" textColor="text-white" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div className="container min-h-screen">
        <div className="mt-16">
          <h1 className="pl-3 mb-1 text-3xl font-bold text-blue-900 border-l-4 border-blue-900">Product</h1>
          <p className="text-sm text-gray-500">ini halaman untuk melihat semua product.</p>
        </div>
        <div className="flex flex-wrap w-full lg:flex-row">
          <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {Products.length > 0 &&
              Products.map((product) => (
                <CardProduct cardBorder="border-blue-800" key={product.id}>
                  <CardProduct.Header image={product.image} />
                  <CardProduct.Body classname="mt-5 mb-3" title={product.title} price={product.price}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer classname="mt-6" btnColor="bg-blue-800" btnShadow="shadow-blue-800/30" handleAddToCart={() => handleAddToCart(product.id)}>
                    Add to Cart
                  </CardProduct.Footer>
                </CardProduct>
              ))}
          </div>
          <div className="w-full lg:w-[40%] flex flex-col mt-5 lg:pl-10">
            <h1 className="mb-1 text-2xl font-bold text-blue-900">Cart</h1>
            <table className="border border-collapse border-slate-600">
              <thead>
                <tr>
                  <th className="px-2 py-1 border border-slate-300">QTY</th>
                  <th className="px-2 py-1 border border-slate-300">Product</th>
                  <th className="px-2 py-1 border border-slate-300">Price</th>
                  <th className="px-2 py-1 border border-slate-300">Total</th>
                </tr>
              </thead>
              <tbody>
                {Products.length > 0 &&
                  cart.map((cartProduct) => {
                    const product = Products.find((product) => product.id === cartProduct.id);
                    return (
                      <tr key={cartProduct.id}>
                        <td className="px-2 py-1 border border-slate-300">{cartProduct.quantity}</td>
                        <td className="px-2 py-1 border border-slate-300 line-clamp-2">{product.title}</td>
                        <td className="px-2 py-1 border border-slate-300">{product.price.toLocaleString("us-US", { style: "currency", currency: "USD" })}</td>
                        <td className="px-2 py-1 border border-slate-300">{(cartProduct.quantity * product.price).toLocaleString("us-US", { style: "currency", currency: "USD" })}</td>
                      </tr>
                    );
                  })}
                <tr>
                  <td colSpan={3} className="px-2 py-1 border border-slate-300">
                    Total price
                  </td>
                  <td className="px-2 py-1 border border-slate-300">{totalPrice.toLocaleString("us-US", { style: "currency", currency: "USD" })}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
