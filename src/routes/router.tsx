import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATH } from "./paths";

//  TODO: Remove this imports and their usage after to start project
import { Link } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Link to={PATH.LOGIN}>Login</Link>} />
        <Route path={PATH.LOGIN} element={<Link to={PATH.HOME}>Home</Link>} />
      </Routes>
    </BrowserRouter>
  );
};
