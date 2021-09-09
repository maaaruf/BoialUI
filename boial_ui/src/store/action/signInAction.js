import { ActionTypes } from "../actionType";
import axios from "axios";
import { history } from "../../utils/helpers/helper";

export const setUserSignInData = (user) => {
    console.log("calling setUserSignInData from signIn Action");
    return {
        type: ActionTypes.SIGN_IN,
        payload: user,
    };
};

export const signInAction = (user) => {
    console.log(user, "User from SignInAction ======");
    
    return async (dispatch, action) => {
        console.log("calling axios for login from signin Action");

        const response = await axios.post("http://localhost:8080/signin", {
            email: user.email,
            password: user.password,
        });

        dispatch(setUserSignInData(response.data));
        console.log(response.data, "==========================");
    }
};