import { combineReducers } from "redux";
import { signupReducer } from "./Signup.reducer";


export const rootreducer = combineReducers({
    Auth: signupReducer,
})