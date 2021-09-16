import { ActionTypes } from "../actionType";

const initialProductsListState = {
    data:[]
};

const initialSingleProductState = {
    data:{}
};

export const productsReducer = (state = initialProductsListState, action) => {

    switch (action.type){
        case ActionTypes.PRODUCTS:
            return {...state, data:action.payload};
        default:
            return state;
    }
}

export const singleProductReducer = (state = initialSingleProductState, action) => {

    switch (action.type){
        case ActionTypes.PRODUCTS:
            return {...state, data:action.payload};
        default:
            return state;
    }
}