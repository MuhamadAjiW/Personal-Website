import React from "react"
import Page from "../../components/Page/Page"

const Clear : React.FC<{pageNum: number}> = ({pageNum}) => {
    return (
      <>
        <Page pageNum={pageNum}>
            <></>
        </Page>
      </>
    )
  }
  
  export default Clear
  