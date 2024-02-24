import React from "react"
import "./Section.css"
import Page from "../../components/Page/Page"

const Section : React.FC<{pageNum: number, id?: string, title?: string, subtitle?: string}> = ({pageNum, id, title, subtitle}) => {
    return (
      <>
        <Page pageNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center xl:gap-10 gap-5">
                <h2 className="section-title">
                  {title}
                </h2>
                <p className="section-subtitle">
                  {subtitle}
                </p>
            </div>
        </Page>
      </>
    )
  }
  
  export default Section
  