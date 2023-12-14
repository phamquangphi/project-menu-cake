import React from "react";
import Header from "./UI/Header";
import { Outlet } from "react-router-dom";
import Footer from "./UI/Footer";

const MainPlayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-[2.5rem] mx-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPlayout;
