import { combineReducers } from "redux";
import signInReducer from './signInReducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes } from "../actionType";
import { categoryReducer, singleCategoryReducer } from "./categoryReducer"; 
import { productsReducer, singleProductReducer } from "./productReducer";
import { cartReducer, tempCartReducer } from "./cartReducer";


const userInfoPersistConfig = {
    key: 'userInfo',
    storage: storage
}

const tempCartPersistConfig = {
    key: 'tempCart',
    storage: storage
}

export const persistedStore = persistReducer(userInfoPersistConfig ,signInReducer);
export const persistedTempCartStore = persistReducer(tempCartPersistConfig ,tempCartReducer);

export const mainReducer = combineReducers({
    UserInfoStore: persistedStore,
    CategoryStore: categoryReducer,
    SingleCategoryStore: singleCategoryReducer,
    ProductsStore: productsReducer,
    SingleProductStore: singleProductReducer,
    CartStore: cartReducer,
    TempCartStore: persistedTempCartStore
});