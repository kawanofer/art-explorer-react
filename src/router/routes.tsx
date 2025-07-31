import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

export function AppRouters() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
