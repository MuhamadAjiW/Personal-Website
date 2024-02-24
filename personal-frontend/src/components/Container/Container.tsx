import React, { ReactNode, useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

const Container : React.FC<{ children: ReactNode }> = ({children}) => {
    const {darkMode} = useContext(DarkModeContext);

    return (
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    )
  }
  
  export default Container
  