// Gotta give credit ofc i didn't make this
// Credit: https://tw-elements.com/docs/react/forms/switch/
import React from "react";
import "./ToggleButton.css"

interface ToggleButtonProps {
    onToggle: () => void;
    checked: boolean;
}

const ToggleButton : React.FC<ToggleButtonProps> = ({ onToggle, checked }) => {
    return (
        <div>
            <input
                className="toggle-button"
                type="checkbox"
                role="switch"
                checked={checked}
                onChange={onToggle}
                />
        </div>
      )
    }

export default ToggleButton;