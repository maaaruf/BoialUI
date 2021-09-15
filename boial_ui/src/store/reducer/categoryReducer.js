import { ActionTypes } from "../actionType";

const initialState = null;

const categoryReducer = (state = initialState, action) => {
    console.log(action.payload, "actions payload from category reducer");
    let data = action.payload;
    switch (action.type){
        case ActionTypes.CATEGORY:
            return action.payload
        default:
            return state;
    }
}

export default categoryReducer;