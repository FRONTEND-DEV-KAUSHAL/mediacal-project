import { useReducer } from "react";
import { createContext } from "react";
import { TOGGLE_THEME } from "./Actiontypes";
import { themeReducer } from "./reducer/Themereducer";

export const themeContext = createContext();

const initVal = {
    theme: 'light'
}
 const ToggleContext = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initVal);

    const toggletheme = (val) => {
        console.log(val);
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({type: TOGGLE_THEME, payload: newTheme})
    }

    return(
        <themeContext.Provider
        value= { {
            ...state,
            toggletheme
        }}
        >
            {children}
        </themeContext.Provider>
    )
 }

export default ToggleContext