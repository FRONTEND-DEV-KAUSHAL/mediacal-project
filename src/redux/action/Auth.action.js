import * as ActionTypes from '../ActionTypes';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_UP_ACTION , payload : data});
}   
export const signInAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_IN_ACTION , payload : data});
}   
export const forgotAction = (data) => (dispatch) => {
    console.log(data);
    dispatch({type : ActionTypes.FORGOT_ACTION , payload : data})
    console.log(data);
}