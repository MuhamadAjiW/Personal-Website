import React from "react"
import "./Personal.css"
import Page from "../../components/Page/Page"

const Personal : React.FC<{pageNum: number}> = ({pageNum}) => {
    return (
      <>
        <Page pageNum={pageNum}>
            <div className="flex h-full w-full items-center justify-center">
                <h1 className="personal-title">
                    Hi!
                </h1>
            </div>
        </Page>
      </>
    )
  }
  
  export default Personal
  