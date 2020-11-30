//imports
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
//constants middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create du store global

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
