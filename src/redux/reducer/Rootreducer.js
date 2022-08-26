import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { signupReducer } from "./Signup.reducer";


export const rootreducer = combineReducers({
    Auth: signupReducer,
    Alert: alertReducer
})