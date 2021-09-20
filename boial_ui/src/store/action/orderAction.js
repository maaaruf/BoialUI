import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { ActionTypes } from "../actionType";

const setOrder = (data) => {
    return {
        type: ActionTypes.ORDER,
        payload: data
    }
}

export const loadOrderAction = () => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/order`;

            const response = await axios.get(url, { headers: { authorization: `bearer ${token}` } });

            dispatch(setOrder(response.data));
        }
        catch (e) {
            console.log(e, "Failed to load Orders list");
        }
    }
}

export const cancelOrderAction = (id) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/order/${id}`;

            const response = await axios.patch(url, { status: 2 }, { headers: { authorization: `bearer ${token}` }});

            dispatch(loadOrderAction());
        }
        catch (e) {
            console.log(e, "Failed to cancel order");
        }
    }
}

export const changeOrderStatusAction = (id, status) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/order/${id}`;
            status = parseInt(status);

            const response = await axios.patch(url, { status: status }, { headers: { authorization: `bearer ${token}` }});

            dispatch(loadOrderAction());
        }
        catch (e) {
            console.log(e, "Failed to load Orders list");
        }
    }
}