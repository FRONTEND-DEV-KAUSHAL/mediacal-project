import * as Actiontypes from '../ActionTypes'

export const setAlert = (data) => (dispatch) => {
    dispatch({type: Actiontypes.SET_ALERT , payload : data});
}

export const resetAlert = (data) => (dispatch) => {
    dispatch({type: Actiontypes.RESET_ALERT , payload : data});
}