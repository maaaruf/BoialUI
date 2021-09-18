import { ActionTypes } from "../actionType";

const initialCart = ()=> {
    return {
        data:[]
    }
}
export const cartReducer = (state = initialCart, action) => {

    switch (action.type){
        case ActionTypes.CART:
            return {...state, data:action.payload};
        default:
            return state;
    }
}

export const tempCartReducer = (state = initialCart, action) => {

    switch (action.type){
        case ActionTypes.TEMP_CART:
            return {...state, data:action.payload};
        default:
            return state;
    }
}