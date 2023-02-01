import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddOrder } from "../pages/AddOrder.jsx";
import { Login } from "../pages/Login.jsx";
import { Orders } from "../pages/Orders.jsx";
import { SignUp } from "../pages/SignUp.jsx";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        ></Route>
         <Route
          path="/Add_order"
          element={
            <PrivateRoute>
              <AddOrder />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;