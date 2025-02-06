import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/global.css";

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
