import * as Actiontypes from '../ActionTypes'
const initVal = {
    text:'',
    color:''
}

export const alertReducer = (state = initVal, action) => {
    switch(action.type){
        case Actiontypes.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color:action.payload.color
            }
        case Actiontypes.RESET_ALERT:
            return{
                ...state,
                text:'',
                color:''
            }
        default:
            return state
    }
}
