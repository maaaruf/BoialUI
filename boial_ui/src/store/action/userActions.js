import { ActionTypes } from "../actionType";
import axios from "axios";
import { history } from "../../utils/helpers/helper";
import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import { toastNotify } from "../../utils/helpers/toastHelper";

const setData = (user) => {

    return {
        type: ActionTypes.CURRENT_USER,
        payload: user,
    };
};

const setListData = (users) => {
    return {
        type: ActionTypes.USERS,
        payload: users
    }
}

export const getCurrentUser = () => {

    return async (dispatch, getState) => {
        try {
            const url = `${BASE_URL}/my-detail/`;
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const response = await axios.get(url, { headers: { authorization: `bearer ${token}` } });

            dispatch(setData(response.data));
        }
        catch (e) {
            console.log("Failed to get current user", e);
        }
    }
};

export const loadUsersAction = () => {

    return async (dispatch, getState) => {
        try {
            const url = `${BASE_URL}/user/`;
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const response = await axios.get(url, { headers: { authorization: `bearer ${token}` } });

            dispatch(setListData(response.data));
        }
        catch (e) {
            console.log("Failed to get current user", e);
        }
    }
};

export const deleteUsersAction = (id) => {

    return async (dispatch, getState) => {
        try {
            const url = `${BASE_URL}/user/${id}`;
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const response = await axios.delete(url, { headers: { authorization: `bearer ${token}` } });

            console.log(response, "============= to delete============== resfsaf");

            dispatch(setListData(response.data));
            dispatch(loadUsersAction());
            toastNotify("User Deleted Successfully", SUCCESSFUL);
        }
        catch (e) {
            console.log("Failed to delete user", e);
            toastNotify("User Delation failed", ERROR);
        }
    }
};