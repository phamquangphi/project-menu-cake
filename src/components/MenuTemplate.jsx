import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbStore } from "../firebase";
const MenuTemplate = () => {
  const [menu, setMenu] = useState([]);
  const getData = async () => {
    try {
      const valRef = collection(dbStore, "menu");
      const dataDB = await getDocs(valRef);
      const allData = dataDB.docs.map((val) => ({ ...val.data(), id: val.id }));
      setMenu(allData);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", menu);
  return (
    <div>
      <h1 className="text-center text-[50px] font-bold text-[#9b4427]">
        Menu Bakery & Cake
      </h1>
      <div className=" ml-[100px] flex items-center">
        <p className=" text-xl text-[#9b4427] font-medium">Cart 
        shop:</p>
        <i className="fa-solid fa-cart-shopping ml-3 text-[30px] text-[#9b4427]"></i>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-[50px]">
        {menu?.map((menu) => {
          return (
            <div key={menu.id} className=" bg-white shadow-2xl rounded-3xl">
              <img
                className="py-3 px-[40px] 2xl:w-[100%] 2xl:h-[200px] md:w-[150%] md:h-[130px]"
                src={menu.img}
                alt=""
              />
              <div className="flex items-center justify-between my-[30px] mx-5">
                <h1 className="text-[#9b4427] font-bold text-[20px] underline">
                  {menu.name}
                </h1>
                <p className=" text-[#9b4427] font-medium text-[25px]">
                  {menu.price.toLocaleString()}$
                </p>
              </div>
              <button className="bg-[#c65c39] w-full h-[50px] rounded-3xl font-extrabold text-white hover:bg-white hover:text-[#9b4427]">
                Add to carts
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTemplate;
