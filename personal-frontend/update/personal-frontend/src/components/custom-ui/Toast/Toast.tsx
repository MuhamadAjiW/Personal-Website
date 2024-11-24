import React from "react"
import "./Toast.css"


const Toast: React.FC<{ message: string, className: string }> = ({ message, className }) => {
  return (
    <>
      <div className={className}>
        {message}
      </div>
    </>
  )
}

export default Toast
