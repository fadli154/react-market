import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct } from "../../Services/product.service";
import Button from "../../components/Elements/Button/Button";
import { useLogin } from "../../hooks/useLogin";

const DetailProductPage = () => {
  const { id } = useParams();
  const username = useLogin();
  const [detailProduct, setdetailProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setdetailProduct(data);
    });
  }, [id]);

  return (
    <div className="min-h-screen">
      <div className="w-full py-2 bg-blue-600">
        <div className="container flex items-center justify-end">
          <div className="flex items-center gap-x-5">
            <p className="font-semibold text-white">{username}</p>
            <Button variant="bg-red-600" textColor="text-white">
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col ">
        <div className="mt-14">
          <nav className="flex items-center">
            <Link className="flex items-center" to="/product">
              <div className="mr-2 text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-semibold">Product</p>
            </Link>
            <Link className="flex items-center ml-2">
              <div className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[19px] h-[19px]">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
              </div>
              Detail Product
            </Link>
          </nav>
        </div>
        <div className="mt-6">
          <h1 className="pl-3 mb-1 text-3xl font-bold text-blue-900 border-l-4 border-blue-900">Product</h1>
          <p className="text-sm text-gray-500">ini halaman untuk melihat semua product.</p>
        </div>
        {Object.keys(detailProduct).length > 0 && (
          <div className="flex flex-row mt-5 font-sans border-t-2 border-blue-600 rounded-md shadow-xl">
            <div className="relative flex-none w-56">
              <img src={detailProduct.image} alt="" className="absolute inset-0 object-cover w-full h-full" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">{detailProduct.title}</h1>
                  <div className="text-lg font-semibold text-slate-500">${detailProduct.price}</div>
                </div>
                <div>⭐ {detailProduct.rating.rate} </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-slate-700">{detailProduct.rating.count} Stock</div>
              </div>
              <div className="flex items-baseline pb-6 mt-4 mb-6 border-b border-slate-200">{detailProduct.description}</div>
              <div className="flex mb-6 space-x-4 text-sm font-medium">
                <div className="flex flex-auto space-x-4">
                  <button className="h-10 px-6 font-semibold text-white bg-black rounded-md" type="submit">
                    Buy now
                  </button>
                  <button className="h-10 px-6 font-semibold border rounded-md border-slate-200 text-slate-900" type="button">
                    Add to bag
                  </button>
                </div>
                <button className="flex items-center justify-center flex-none border rounded-md w-9 h-9 text-slate-300 border-slate-200" type="button" aria-label="Like">
                  <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-700">Free shipping on all continental US orders.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProductPage;
