import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  Button} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { setisAuth } from "../Redux/AuthRedux/action";

let links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path : "/Add_order",
    title : "Add Order",
  },
  {
    path: "/login",
    title: "Login",
  },
  {
    path: "/signUp",
    title: "Register",
  }
];
const Navbar = () => {
  let { isAuth } = useSelector((state) => state);

  let token = localStorage.getItem('Usertoken');
//   useEffect(()=>{
//     if(isAuth){
//       fetchUser();
//     }
//   },[isAuth])
  let dispatch = useDispatch();
  const handleLogout = () => {
    // dispatch(setisAuth(false));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          margin: "0",
        }}
      >
        {isAuth ? (
          <>
            <NavLink
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                fontSize: "20px",
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                marginLeft: "40px",
                marginRight: "40px",
                fontSize: "20px",
              }}
              to="/Add_order"
            >
              Add Order
            </NavLink>
            <Button
              colorScheme="white"
              fontSize={18}
              mt="-3px"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          links.map(({ path, title }) => {
            return (
              <NavLink
                style={{
                  marginLeft: "40px",
                  marginRight: "40px",
                  fontSize: "20px",
                }}
                key={path}
                to={path}
                end
              >
                {title}
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Navbar;