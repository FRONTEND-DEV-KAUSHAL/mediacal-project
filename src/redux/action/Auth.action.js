import * as ActionTypes from '../ActionTypes';

export const signUpAction = (data) => (dispatch) => {
    dispatch({type : ActionTypes.SIGN_UP_ACTION , payload : data});
}   