import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
  let{isAuth} = useSelector(state=>state);
 if(isAuth===false){
 return <Navigate to={'/login'}/>
 }
  return children;
}; 

export default PrivateRoute;