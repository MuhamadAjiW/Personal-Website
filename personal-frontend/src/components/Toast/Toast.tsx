import "./Toast.css"
import React from "react"


const Toast : React.FC<{message: string, className: string}> = ({message, className}) => {  
    return (
      <>
        <div className={className}>
          {message}
        </div>
      </>
    )
  }
  
  export default Toast
  