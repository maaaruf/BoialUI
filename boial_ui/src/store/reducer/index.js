import { combineReducers } from "redux";
import signInReducer from './signInReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../actionType";
import categoryReducer from "./categoryReducer"; 


const persistConfig = {
    key: ActionTypes.SIGN_IN,
    storage: storage
}

export const persistedStore = persistReducer(persistConfig ,signInReducer);

export const mainReducer = combineReducers({
    UserInfoStore: persistedStore,
    CategoryStore: categoryReducer
});