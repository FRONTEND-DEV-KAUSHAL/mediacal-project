import * as ActionTypes from '../ActionTypes';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_UP_ACTION , payload : data});
}   
export const signInAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_IN_ACTION , payload : data});
}   