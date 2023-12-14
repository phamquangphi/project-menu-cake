import React from "react";

const Footer = () => {
  return (
    <div className="mt-[50px] bg-[#9b4427] 2xl:h-[300px] md:h-[270px]">
      <div className="pt-[50px] flex justify-between">
        <div className="pl-[50px]">
          <h1 className="2xl:text-[30px] md:text-[20px] font-bold text-white">
            LITTLE RED HEN BAKERY
          </h1>
          <p className="font-extralight 2xl:text-[20px] md:text-[15px] text-white pt-7">
            OPEN THURS-MON 7AM - 2PM
          </p>
          <p className="font-extralight 2xl:text-[20px] md:text-[15px] text-white">
            CLOSED TUES/WEDS
          </p>
          <p className="2xl:text-[15px] md:text-[10px] text-white underline pt-7">
            302 G St. Salida, CO 81201 (719) 539-2401
          </p>
          <p className="2xl:text-[15px] md:text-[10px] text-white underline">
            littleredhensalida@gmail.com
          </p>
        </div>
        <div className="pr-[50px]">
          <p className="font-medium 2xl:text-[20px] md:text-[15px] text-white pb-5">
            Proud Member of the
          </p>
          <img
            className="md:w-[50%] 2xl:w-[100%]"
            src="/images/footer.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
