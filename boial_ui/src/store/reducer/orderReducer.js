import { ActionTypes } from "../actionType";

const initialOrder = ()=> {
    return {
        data:[]
    }
}
export const orderReducer = (state = initialOrder, action) => {

    switch (action.type){
        case ActionTypes.ORDER:
            return {...state, data:action.payload};
        default:
            return state;
    }
}