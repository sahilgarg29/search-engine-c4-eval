import { applyMiddleware, createStore } from "redux";
import { resultsReducer } from "./reducer";
import thunk from "redux-thunk";

const store = createStore(resultsReducer, applyMiddleware(thunk));

export default store;
