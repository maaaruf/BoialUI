import { ActionTypes } from "../actionType";
import axios from "axios";
import { history } from "../../utils/helpers/helper";

const setData = (user) => {
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

        dispatch(setData(response.data));

        console.log(response.data?.userInfo.role,"login response from signInAction");
        if(response.data?.userInfo.role == 'admin'){
            history.push('/admin');
            window.location.reload();
        }else{
            history.push('/home');
            window.location.reload();
        }
    }
};