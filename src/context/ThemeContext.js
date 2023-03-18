import { createContext } from "react";

export const themes = {
    dark:"",
    light: "dark-content"
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme:()=>{},
})