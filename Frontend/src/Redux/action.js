import {
    SETERROR,
    SETISAUTH,
    SETISREGISTER,
    SETLOADING,
    SETTOKEN,
  } from "./AuthRedux/actionTypes";
  import axios from "axios";
  
  export const settoken = (payload) => {
    return {
      type: SETTOKEN,
      payload: payload,
    };
  };
  
  export const setisAuth = (payload) => {
    return {
      type: SETISAUTH,
      payload: payload,
    };
  };
  export const setloading = (payload) => {
    return {
      type: SETLOADING,
      payload: payload,
    };
  };
  export const seterror = () => {
    return {
      type: SETERROR,
    };
  };
  export const setisRegister = (payload) => {
    return {
      type: SETISREGISTER,
      payload: payload,
    };
  };
  
  export const handleRegister = (data) => async (dispatch) => {
    try {
      dispatch(setloading(true));
      let res = await axios.post(
        "https://mauve-seal-tie.cyclic.app/auth/register",
        data
      );
      //    console.log(res.data.token)
      if (res.data.message == "Successfully created") {
        dispatch(setisRegister(true));
      } else {
        dispatch(seterror());
        dispatch(setisRegister(false));
      }
      dispatch(setloading(false));
    } catch (error) {
      dispatch(seterror());
      dispatch(setloading(false));
    }
  };
  
  export const handleLogin = (data) => async (dispatch) => {
    try {
      dispatch(setloading(true));
      let res = await axios.post(
        "https://mauve-seal-tie.cyclic.app/auth/login",
        data
      );
      localStorage.setItem("Usertoken", res.data.token);
      localStorage.setItem("User_Id", res.data.User_Id);
      if (res.data.token) {
        dispatch(settoken(res.data.token));
        dispatch(setisAuth(true));
      } else if (res.data.message == "wrong credentials!") {
        dispatch(seterror());
        dispatch(setisAuth(false));
      }
      dispatch(setloading(false));
    } catch (error) {
      dispatch(seterror());
      dispatch(setloading(false));
    }
  };