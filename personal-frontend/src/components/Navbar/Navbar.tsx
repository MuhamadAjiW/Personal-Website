import "./Navbar.css"
import ToggleButton from "../ToggleButton/ToggleButton"
import React, { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

const Navbar : React.FC<null> = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
      <>
        <nav className="hidden md:block">
            <div className="navbar-base">
                
                <ToggleButton onToggle={toggleDarkMode} checked={darkMode}/>

                <div className="hidden md:flex flex-row">
                <ul className="flex space-x-10">
                    <li><a href="#" className="navbar-button">Home</a></li>
                    <li><a href="#" className="navbar-button">About Me</a></li>
                    <li><a href="#" className="navbar-button">Contact Me!</a></li>
                </ul>
            </div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  