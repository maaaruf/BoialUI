import { ActionTypes } from "../actionType";

const initialCategoryListState = {
    data:[]
};

const initialSingleCategoryState = {
    data:{}
};

export const categoryReducer = (state = initialCategoryListState, action) => {
    let data = action.payload;
    switch (action.type){
        case ActionTypes.CATEGORY:
            return {...state, data:action.payload};
        default:
            return state;
    }
}

export const singleCategoryReducer = (state = initialSingleCategoryState, action) => {
    let data = action.payload;
    switch (action.type){
        case ActionTypes.GET_CATEGORY:
            return {...state, data:action.payload};
        default:
            return state;
    }
}