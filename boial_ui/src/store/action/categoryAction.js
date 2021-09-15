import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import axios from "axios";
import { ActionTypes } from "../actionType";
import { useSelector } from "react-redux";
import { toastNotify } from "../../utils/helpers/toastHelper";

const setData = (data) => {
    return {
        type: ActionTypes.CATEGORY,
        payload: data,
    };
};

// const userSignInInfo = useSelector((store) => store.UserInfoStore);

export const createCategoryAction = (category) => {
    // const userSignInInfo = useSelector((store) => store.UserInfoStore);
    // console.log(category, "category from CategoryAction.");

    return async (dispatch, getState) => {
        let response;
        try {

            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;

            const url = `${BASE_URL}/category`;
            const data = category;
            //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzZiMzhkM2I5NGRiMDRlY2QyNWMwNCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20ifSwiaWF0IjoxNjMxNDI0NjU1LCJleHAiOjE2MzE1OTc0NTV9.UC0GkSrVYoBWYtzQbN2DeE2Zaj3skPw0dP9BE43Js0I";
            const response = await axios.post(url, data, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`${response.data.name} Created Successfully.`, SUCCESSFUL);
            //dispatch(setData(response.data));     //{category: {name: response.data.name, description: response.data.description}}
            console.log(response, "==========================");
        }
        catch (e) {
            toastNotify(`Faild to create ${category.name}. ${e}`, ERROR);
        }

    }
};

export const loadCategoriesAction = (category) => {
    // const userSignInInfo = useSelector((store) => store.UserInfoStore);
    // console.log(category, "category from CategoryAction.");

    return async (dispatch, getState) => {
        let response;
        try {

            const { UserInfoStore } = getState();
            const token = UserInfoStore.token;

            const url = `${BASE_URL}/category`;
            const data = category;
            const response = await axios.get(url, {}, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`Category Loaded Successfully.`, SUCCESSFUL);
            dispatch(setData(response.data));
        }
        catch (e) {
            toastNotify(`Faild to create Load. ${e}`, ERROR);
        }

    }
};