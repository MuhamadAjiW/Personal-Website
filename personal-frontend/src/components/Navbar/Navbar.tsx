import "./Navbar.css"
import ToggleButton from "../ToggleButton/ToggleButton"
import React, { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

const Navbar : React.FC<null> = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
      <>
        {/* Large screen */}
        <nav className="hidden md:block">
            <div className="navbar-base">
                
                <ToggleButton onToggle={toggleDarkMode} checked={darkMode}/>

                <div className="hidden md:flex flex-row">
                <ul className="flex space-x-10">
                    <li><a href="#home" className="navbar-button">Home</a></li>
                    <li><a href="#about" className="navbar-button">About Me</a></li>
                    <li><a href="#porto" className="navbar-button">Portofolio</a></li>
                    <li><a href="#contact" className="navbar-button">Contact Me!</a></li>
                </ul>
            </div>
            </div>
        </nav>

        {/* Small screen */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <ToggleButton onToggle={toggleDarkMode} checked={darkMode} />
        </div>
      </>
    )
  }
  
  export default Navbar
  