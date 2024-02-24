import React from "react"
import Page from "../../components/Page/Page"

const Clear : React.FC<{pageNum: number, id?: string}> = ({pageNum, id}) => {
    return (
      <>
        <Page pageNum={pageNum} id={id}>
            <></>
        </Page>
      </>
    )
  }
  
  export default Clear
  