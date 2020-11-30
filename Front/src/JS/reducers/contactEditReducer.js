//Imports
import {TOGGLE_TRUE,TOGGLE_FALSE} from "../constants/contactEditActionTypes";

//Initiale state
 const initileState={
     edit:false,
 }

 //contact edit reducer pure function

 export const contactEditReducer=(state=initileState,{type})=>{
     switch (type) {
         case TOGGLE_TRUE: return{...state,edit:true}
         case TOGGLE_FALSE: return{...state,edit:false}   
         default: return state;
            
     }
 }