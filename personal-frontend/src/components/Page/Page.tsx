import React from "react"
import "./Page.css"

const Page : React.FC<null> = () => {
    return (
      <>
        <div className="page-base bg-white dark:bg-black">
            <h1 className="page-text">
                Hello!
            </h1>
        </div>
      </>
    )
  }
  
  export default Page
  