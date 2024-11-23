import React, { ReactNode, createContext, useState } from "react";

interface DarkModeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const initialContextValue: DarkModeContextProps = {
    darkMode: false,
    toggleDarkMode: () => {},
  };

const DarkModeContext = createContext<DarkModeContextProps>(initialContextValue);

const DarkModeProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            <div className={darkMode? 'dark' : ''}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider};