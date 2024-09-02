import { useContext, useState } from "react";
import { createContext } from "react";


const ThemeContext=createContext()

const ThemeProvider=({children})=>
{
    //const[isDark,setIsDark]=useState(false)
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return(
        <ThemeContext.Provider value={{isDark,setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useThemeContext=()=>
{
    return useContext(ThemeContext)
}
export {useThemeContext,ThemeProvider}