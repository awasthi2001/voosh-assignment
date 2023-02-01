import {applyMiddleware, combineReducers, legacy_createStore as createstore} from'redux';
import thunk from 'redux-thunk'
import { AuthReducer } from './reducer';


const middleware = applyMiddleware(thunk)

export const store = createstore(AuthReducer,middleware)