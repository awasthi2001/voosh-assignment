import {
    SETERROR,
    SETISAUTH,
    SETISREGISTER,
    SETLOADING,
    SETTOKEN,
  } from "./actionTypes";

  
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
      let res = await fetch(
        "https://tame-blue-quail-coat.cyclic.app/user/add-user",{
          method : 'POST',
          body : JSON.stringify(data),
          headers : {
            'Content-Type': 'application/json'
          }
        }
      );
      let res2 = await res.json();
      if (res2== "registered") {
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
      let res = await fetch(
        "https://tame-blue-quail-coat.cyclic.app/user/login-user",{
          method : 'POST',
          body : JSON.stringify(data),
          headers : {
            'Content-Type': 'application/json'
          }
        }
      );
      localStorage.setItem("Usertoken", res.data.token);
      localStorage.setItem("user_id", res.data.user_id);
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