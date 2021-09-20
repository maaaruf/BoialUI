import { ActionTypes } from "../actionType";

const initialUsers = ()=> {
    return {
        data:[]
    }
}

export const usersReducer = (state = initialUsers, action) => {

    switch (action.type){
        case ActionTypes.USERS:
            return {...state, data:action.payload};
        default:
            return state;
    }
}