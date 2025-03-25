import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "./global.css";

const HomeScreen = lazy(() => import("./screen/home/HomeScreen"));
const ThankyouScreen = lazy(() => import("./screen/thanks/ThanksScreen"));

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/thanks" element={<ThankyouScreen />} />
    </Routes>
  );
};
