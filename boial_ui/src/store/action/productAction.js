import { BASE_URL, ERROR, SUCCESSFUL } from "../../utils/constants";
import axios from "axios";
import { ActionTypes } from "../actionType";
import { useSelector } from "react-redux";
import { toastNotify } from "../../utils/helpers/toastHelper";

export const createProductAction = (product) => {
    // const userSignInInfo = useSelector((store) => store.UserInfoStore);
    // console.log(category, "category from CategoryAction.");

    return async (dispatch, action) => {
        let response;
        try {
            const url = `${BASE_URL}/products`;
            const data = product;
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMzZiMzhkM2I5NGRiMDRlY2QyNWMwNCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20ifSwiaWF0IjoxNjMxNjM5NzI0LCJleHAiOjE2MzE4MTI1MjR9.kQd0s-3w3qLfEc5ZmlPxr3RCY-rWKoQsMx--yUWjPAc";
            const response = await axios.post(url, data, { headers: { authorization: `bearer ${token}` } });

            toastNotify(`${response.data.name} Created Successfully.`, SUCCESSFUL);
            //dispatch(setData(response.data));     //{category: {name: response.data.name, description: response.data.description}}
            // console.log(response, "==========================");
        }
        catch(e){
            toastNotify(`Faild to create ${product.title}. ${e}`, ERROR);
        }
    }
};