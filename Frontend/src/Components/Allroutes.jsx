import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login.jsx";
import { SignUp } from "../Pages/SignUp.jsx";
import PrivateRoute from "./PrivateRoute";
import { Todo } from "./Todo";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Todo />
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