import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/lib/persistStore";

const composeEnhancher = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(mainReducer, composeEnhancher);
export const persistor = persistStore(store);