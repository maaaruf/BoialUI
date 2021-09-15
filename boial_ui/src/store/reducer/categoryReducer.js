import { ActionTypes } from "../actionType";

const initialState = {
    data:{}
};

export const categoryReducer = (state = initialState, action) => {
    console.log(action.payload, "actions payload from category reducer");
    let data = action.payload;
    switch (action.type){
        case ActionTypes.CATEGORY:
            return {...state, data:action.payload};
        default:
            return state;
    }
}

export const singleCategoryReducer = (state = initialState, action) => {
    console.log(action.payload, "actions payload from category reducer");
    let data = action.payload;
    switch (action.type){
        case ActionTypes.GET_CATEGORY:
            return {...state, data:action.payload};
        default:
            return state;
    }
}