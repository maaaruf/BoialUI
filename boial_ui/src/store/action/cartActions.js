import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import { ActionTypes } from "../actionType";
import axios from "axios";
import { useSelector } from "react-redux";
import { toastNotify } from "../../utils/helpers/toastHelper";
import { history } from "../../utils/helpers/helper";

const setCart = (data) => {
    return {
        type: ActionTypes.CART,
        payload: data
    }
}

const setTempCart = (data) => {
    return {
        type: ActionTypes.TEMP_CART,
        payload: data
    }
}

export const addToCartAction = (quantity, productId) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/cart`;

            if (token != null) {
                const response = await axios.post(url, {
                    product: { id: productId, quantity: quantity }
                }, { headers: { authorization: `bearer ${token}` } });

                toastNotify(`Added to cart Successfully.`, SUCCESSFUL);
                dispatch(setCart(response.data?.products));
                dispatch(loadCartAction());

            } else {
                dispatch(setTempCart({
                    product: { id: productId, quantity: quantity }
                }));

                history.push('/login');
                window.location.reload();
            }
        }
        catch (e) {
            console.log(e, "================================================");
            toastNotify(`Product added to cart faild. ${e}`, ERROR);
        }
    }
}

export const loadCartAction = () => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/cart`;

            if (token != null) {
                const response = await axios.get(url, { headers: { authorization: `bearer ${token}` } });

                dispatch(setCart(response.data?.products));

            } else {

                history.push('/login');
                window.location.reload();
            }
        }
        catch (e) {
            console.log(e, "================================================");
            toastNotify(`Product added to cart faild. ${e}`, ERROR);
        }
    }
}

export const checkOutAction = () => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/order/checkout`;

            const response = await axios.get(url, { headers: { authorization: `bearer ${token}` } });
            dispatch(loadCartAction());
            toastNotify(`Cart checkouted successfully.`, SUCCESSFUL);
            console.log(response);
        }
        catch (e) {
            console.log(e, "================================================");
            toastNotify(`Product added to cart faild. ${e}`, ERROR);
        }
    }
}