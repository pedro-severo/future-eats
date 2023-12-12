import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./paths";
import { LoginPage } from "../pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.REGISTER} element={<div>REGISTER PAGE</div>} />
      </Routes>
    </BrowserRouter>
  );
};
