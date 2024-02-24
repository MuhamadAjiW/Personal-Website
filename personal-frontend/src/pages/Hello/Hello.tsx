import React from "react"
import "./Hello.css"
import Page from "../../components/Page/Page"

const Hello : React.FC<{pageNum: number}> = ({pageNum}) => {
    return (
      <>
        <Page pageNum={pageNum}>
            <div className="flex h-full w-full items-center justify-center">
                <h1 className="hello-title">
                    Hi! I'm Aji Wibisono 👋
                </h1>
            </div>
        </Page>
      </>
    )
  }
  
  export default Hello
  