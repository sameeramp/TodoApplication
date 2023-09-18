import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";


const customMiddleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }
    return next(action);
};

export const store = legacy_createStore(reducer, applyMiddleware(customMiddleware));

