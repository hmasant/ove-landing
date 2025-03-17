import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "../styles/global.css";

const HomeScreen = lazy(() => import("../screens/home/HomeScreen"));
const ThankyouScreen = lazy(() => import("../screens/thankyou/ThankyouScreen"));

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/thanks" element={<ThankyouScreen />} />
    </Routes>
  );
};
