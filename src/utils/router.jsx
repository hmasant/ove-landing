import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/global.css";
import "../styles/swiper.css";

const HomeScreen = lazy(() => import("../screens/home/HomeScreen"));

export const Router = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<HomeScreen />} />
      </Routes>
    </Suspense>
  );
};
