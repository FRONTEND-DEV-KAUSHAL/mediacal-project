import * as ActionTypes from '../ActionTypes'
const initVal = {
    isLoading: false,
    user: null,
    error:''
}

export const signupReducer = (state=initVal, action) => {

    switch(action.type){
        case ActionTypes.SIGNED_IN_ACTION : 
            return {
                isLoading: false,
                user : action.payload,
                error : ""
            }
        default:
            return state
    }
}