import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import axios from "axios";
import { ActionTypes } from "../actionType";
import { useSelector } from "react-redux";
import { toastNotify } from "../../utils/helpers/toastHelper";

const setProductsList = (data)=> {
    return {
        type: ActionTypes.PRODUCTS,
        payload: data,
    };
}

const setSingleProduct = (data)=> {
    return {
        type: ActionTypes.PRODUCT,
        payload: data,
    };
}

export const createProductAction = (product) => {

    return async (dispatch, getState) => {

        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/products`;
            const data = product;
            const response = await axios.post(url, data, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`${response.data.name} Created Successfully.`, SUCCESSFUL);
        }
        catch(e){
            toastNotify(`Faild to create ${product.title}. ${e}`, ERROR);
            console.log("Error in creating product : ", e);
        }
    }
};

export const loadProductsAction = () => {

    return async (dispatch, getState) => {
        try {
            const url = `${BASE_URL}/products`;
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const response = await axios.get(url, {}, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`Products Loaded Successfully.`, SUCCESSFUL);
            dispatch(setProductsList(response.data));
        }
        catch(e){
            toastNotify(`Faild to load products. ${e}`, ERROR);
        }
    }
};

export const getProductAction = (id) => {

    return async (dispatch, getState) => {
        try {
            const url = `${BASE_URL}/products/${id}`;
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const response = await axios.get(url, {}, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`Products Loaded Successfully.`, SUCCESSFUL);
            dispatch(setSingleProduct(response.data));

            console.log(response, "Response from getProductAction");
        }
        catch(e){
            toastNotify(`Faild to load products. ${e}`, ERROR);
        }
    }
};