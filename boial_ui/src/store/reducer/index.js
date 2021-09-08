import { combineReducers } from "redux";
import signInReducer from './signInReducer';

export const mainReducer = combineReducers({
    UserInfoStore: signInReducer
});