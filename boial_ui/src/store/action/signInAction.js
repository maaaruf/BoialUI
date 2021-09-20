import { ActionTypes } from "../actionType";
import axios from "axios";
import { history } from "../../utils/helpers/helper";
import { toastNotify } from "../../utils/helpers/toastHelper";
import { ERROR } from "../../utils/constants";

const setData = (user) => {
    console.log("calling setUserSignInData from signIn Action");
    return {
        type: ActionTypes.SIGN_IN,
        payload: user,
    };
};

export const signInAction = (user) => {

    return async (dispatch, action) => {

        const response = await axios.post("http://localhost:8080/signin", {
            email: user.email,
            password: user.password,
        });

        if (response.data?.message !== 'Wrong Password') {
            dispatch(setData(response.data));

            console.log(response.data?.userInfo.role, "login response from signInAction");
            if (response.data?.userInfo?.role == 'admin') {
                history.push('/admin');
                window.location.reload();
            } else {
                history.push('/home');
                window.location.reload();
            }
        }
        else{
            toastNotify("Wrong User Name or Password", ERROR);
        }
    }
};