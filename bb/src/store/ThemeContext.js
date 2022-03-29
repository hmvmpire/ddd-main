import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();

const useThemeContext = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }) => {
    const [themeValue, setThemeValue] = useState("light");

    const changeTheme = (changeThemeValue) => {
        setThemeValue(changeThemeValue);
    }
    
    const value = {
        themeValue,
        changeTheme
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
export {
    useThemeContext
};