import axios from "axios";
import React, { useEffect, useState } from "react";

const Promo = () => {
  const [Promo, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/promo?orderBy=id&sortBy=ASC"
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
    <>
      <div className="flex flex-col w-2/5 justify-center text-center items-center p-0 gap-8 border-r-2">
        <div className="relative h-96">
          <h1 className="flex flex-col text-center text-2xl  font-bold text-red-950 py-8">
            Promo for you
          </h1>
          <span className="">
            Coupons will updated every weeks.
            <br />
            Check then out!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 py-10">
          {Promo.map((item, index) => {
            return (
              <div className="top-80 flex flex-col absolute mt-12 justify-center items-center gap-8 w-1/6 h-[400px] rounded-3xl bg-red-500 px-4 py-12">
                <div
                  key={index[1]}
                  className="flex flex-col gap-4 items-center"
                >
                  <img
                    className="rounded-full shadow-lg shadow-gray-400 w-3/4"
                    src={item.image}
                    alt=""
                  />
                  <div className="flex flex-col gap-y-2 font-bold">
                    {item.name}
                  </div>
                  <div className="flex gap-y-2 text-center text-x5 border-b-[1px] border-black border-dashed px-2 py-2 font-thin">
                    {item.description}
                  </div>
                  <div className="text-md font-bold">{item.code}</div>
                  <div className="text-sm">{item.date}</div>
                </div>
                <div className="top-[1px] -z-[999] flex flex-col left-16 absolute mt-10 justify-center items-start gap-8 w-[85%] h-80 rounded-3xl bg-black px-3 py-12">
                  <div
                    key={index[2]}
                    className="flex flex-col gap-4 items-center"
                  ></div>
                </div>
                <div className="-z-[9999] flex flex-col left-16 absolute justify-center items-start gap-8 w-[93%] h-60 rounded-3xl bg-[#895537] px-3 py-12">
                  <div
                    key={index[3]}
                    className="flex flex-col gap-4 items-center"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex justify-center mt-32 items-center w-[70%] bg-[#895537] rounded-2xl text-white py-4 font-bold">
          Apply Coupon
        </button>
        <div className="flex flex-col gap-2 text-left py-16">
          <h1 className="font-bold">Terms and Condition</h1>
          <h1>1.You can only apply 1 coupon per day</h1>
          <h1>2.it only for dine in</h1>
          <h1>3.buy 1 get 1 only for new user</h1>
          <h1>4.Should make member card to apply coupon</h1>
        </div>
      </div>
    </>
  );
};

export default Promo;
