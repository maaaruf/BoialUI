import { ActionTypes } from "../actionType";
import axios from "axios";
import { history } from "../../utils/helpers/helper";
import { BASE_URL } from "../../utils/constants";

const setData = (user) => {

    return {
        type: ActionTypes.CURRENT_USER,
        payload: user,
    };
};

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

        }
    }
};