import React from "react";

// Create the Context
const ThemeContext = React.createContext({
    // Providing Default Values to the Context which will be there when we load the page
    themeMode : "light",
    darkMode : () =>{},
    lightMode: () =>{}
});

// Create a Context Provider
export const ThemeProvider = ThemeContext.Provider

// Create a Custom Hook to directly use ThemeContext
export default function useTheme(){
    return React.useContext(ThemeContext);
}

//This hook allows components to consume the theme context without the need for nesting ThemeProvider.
