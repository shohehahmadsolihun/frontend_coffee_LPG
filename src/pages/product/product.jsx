import { useEffect, useState } from "react";
import Navbar from "../homepage/navbar";
import axios from "axios";
import Footer from "../footer";
import Promo from "../homepage/promo";

const Product = () => {
  const [Product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/product?orderBy=id&sortBy=ASC&limit=10&page=2"
      );
      console.log(response);
      setProduct(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-row">
        <Promo />
        <div className="flex flex-col w-ful h-2/3 justify-center items-center gap-10 p-10">
          <ul className="flex items-center text-md text-gray-500 gap-20">
            <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">
              favorite Product
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">
              Coffee
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">
              Non coffee
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">
              Foods
            </li>
            <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">
              Add-on
            </li>
          </ul>
          <div className="grid grid-cols-4 gap-8">
            {Product.map((item) => {
              return (
                <div className="p-4 border shadow-lg shadow-gray-400 flex flex-col items-center justify-between py-8 gap-6 rounded-3xl">
                  <img
                    className="rounded-full shadow-lg shadow-gray-400 w-3/5"
                    src={item.image}
                    alt="product"
                  />
                  <div>
                    <div className="font-bold">{item.name} </div>
                    <div className="font-bold"> IDR {item.price} </div>
                    <div> Stock:{item.stock}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
