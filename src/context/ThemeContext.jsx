import { light } from "@mui/material/styles/createPalette";
import { use } from "react";
import { useContext, createContext, useState, useEffect} from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem('theme') || "light")
    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
  
    return context;
  };