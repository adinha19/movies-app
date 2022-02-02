import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers/rootReducer";

const initialState = {};
//create store and add thunk middleware for async/await
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;