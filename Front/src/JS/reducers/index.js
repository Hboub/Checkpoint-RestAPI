//Imports
import {combineReducers} from "redux"
import {contactReducer} from "./contactReducer"
import{contactEditReducer}from "./contactEditReducer"

//exportation du root reducer

export const rootReducer=combineReducers({contactReducer,contactEditReducer});
