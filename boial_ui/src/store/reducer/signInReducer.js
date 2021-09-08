import { ActionTypes } from "../actionType";

const initialState = {
    email: null,
    role: null,
    token: null,
    //user: []
  };

const signInReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionTypes.SIGN_IN:
            return{
                ...state,
                //user: action.payload
                email: action.payload.userInfo.user,
                role: action.payload.userInfo.role,
                token: action.payload.userInfo.token
            };
        default:
            return state;
    }
}

export default signInReducer;