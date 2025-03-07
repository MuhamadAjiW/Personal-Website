import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext, useEffect, useRef, useState } from "react"
import { debounce } from "@/util/func";
import "./Navbar.css"
import { Switch } from "@/components/ui/switch";

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!shown) setShown(true);
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }

  const handleResize = () => {
    setMenuOpen(false);
  };
  const debouncedResize = debounce(handleResize, 50);

  let handleDocumentClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('mousedown', handleDocumentClick)
    return () => {
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  return (
    <>
      <nav>
        {/* Large screen */}
        <div className="hidden md:block">

          <div className="navbar-base">

            <Switch onCheckedChange={toggleDarkMode} checked={darkMode} />

            <div className="hidden md:flex flex-row">
              <ul className="flex space-x-10">
                <li><a href="#home" className="navbar-button">Home</a></li>
                <li><a href="#about" className="navbar-button">About Me</a></li>
                <li><a href="#porto" className="navbar-button">Portofolio</a></li>
                <li><a href="#contact" className="navbar-button">Contact Me!</a></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Small screen */}
        <div className="md:hidden flex items-center fixed bottom-4 right-4 z-10" ref={menuRef}>
          <Switch onCheckedChange={toggleDarkMode} checked={darkMode} />
          <button
            className="navbar-popup-button"
            onClick={toggleMenu} />

          <ul className={`navbar-popup ${menuOpen ? "animate-fadeIn" : shown ? "animate-fadeOut" : "hidden"}`}>
            <li className="navbar-popup-entry"><a href="#home" className="navbar-popup-entry-text">Home</a></li>
            <li className="navbar-popup-entry"><a href="#about" className="navbar-popup-entry-text">About Me</a></li>
            <li className="navbar-popup-entry"><a href="#porto" className="navbar-popup-entry-text">Portofolio</a></li>
            <li className="navbar-popup-entry"><a href="#contact" className="navbar-popup-entry-text">Contact Me!</a></li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar
