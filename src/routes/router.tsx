import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./paths";
import { LoginPage } from "../pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
