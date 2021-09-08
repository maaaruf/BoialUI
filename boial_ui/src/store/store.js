import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const conosleEnhancher = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(mainReducer, conosleEnhancher);