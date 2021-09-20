import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import axios from "axios";
import { ActionTypes } from "../actionType";
import { useSelector } from "react-redux";
import { toastNotify } from "../../utils/helpers/toastHelper";

const setCategoryList = (data) => {
    return {
        type: ActionTypes.CATEGORY,
        payload: data,
    };
};

const setSingleCategory = (data) => {
    return {
        type: ActionTypes.GET_CATEGORY,
        payload: data,
    };
};

export const createCategoryAction = (category) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/category`;
            const data = category;
            const response = await axios.post(url, data, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`${response.data.name} Created Successfully.`, SUCCESSFUL);
        }
        catch (e) {
            toastNotify(`Faild to create ${category.name}. ${e}`, ERROR);
        }
    }
};

export const editCategoryAction = (category) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/category/${category._id}`;
            const data = category;
            const response = await axios.patch(url, data, { headers: { authorization: `bearer ${token}` } });
            dispatch(loadCategoriesAction());

            toastNotify(`${response.data.name} Edited Successfully.`, SUCCESSFUL);
        }
        catch (e) {
            toastNotify(`Faild to Edit ${category.name}. ${e}`, ERROR);
            console.log("Failed to edit category", e);
        }
    }
};

export const loadCategoriesAction = () => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/category`;
            const response = await axios.get(url, {}, { headers: { authorization: `bearer ${token}` } });

            dispatch(setCategoryList(response.data));
        }
        catch (e) {
            console.log(`Faild to Load. ${e}`, e);
        }
    }
};

export const getCategoryAction = (id) => {
    
    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/category/${id}`;
            const response = await axios.get(url, {}, { headers: { authorization: `bearer ${token}` } });

            dispatch(setSingleCategory(response.data));
            
        }
        catch (e) {
            console.log("Failed to load category", e);
        }
    }
};

export const deleteCategoryAction = (id) => {

    return async (dispatch, getState) => {
        try {
            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;
            const url = `${BASE_URL}/category/${id}`;
            const response = await axios.delete(url, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`${response?.data?.name} Deleted Successfully.`, SUCCESSFUL);
            
            dispatch(loadCategoriesAction());
        }
        catch (e) {
            toastNotify(`Faild to delete. ${e}`, ERROR);
        }
    }
};