import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPlayout from "./../components/MainPlayout";
import HomePage from "./../pages/HomePage";
import AboutPage from "./../pages/AboutPage";
import MenuPage from "./../pages/MenuPage";

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPlayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Route>
    </Routes>
  );
};

export default RouteApp;
