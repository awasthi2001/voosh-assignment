import { SETERROR, SETISAUTH, SETISREGISTER, SETLOADING, SETTOKEN } from "./actionTypes"

let initstate = {
    token : '',
    isAuth : false,
    loading : false,
    error : false,
    isregister : false,
}

export const AuthReducer = function(state=initstate,{type,payload}){
    switch(type){
        case SETLOADING : {
            return {...state,loading:payload};
        }
        case SETERROR : {
            return {...state,error:true};
        }
        case SETTOKEN : {
            return {...state,token:payload}
        }
        case SETISAUTH :{
            return {...state,isAuth:payload}
        }
        case SETISREGISTER :{
            return {...state,isregister:payload}
        }
        default :{
            return state;
        }
    }
}