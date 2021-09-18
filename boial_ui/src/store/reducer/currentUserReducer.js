import { ActionTypes } from "../actionType";

const initialCurrentUser = ()=> {
    return {
        data:{}
    }
}

export const currentUserReducer = (state = initialCurrentUser, action) => {

    switch (action.type){
        case ActionTypes.CURRENT_USER:
            return {...state, data:action.payload};
        default:
            return state;
    }
}