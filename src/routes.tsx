import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
