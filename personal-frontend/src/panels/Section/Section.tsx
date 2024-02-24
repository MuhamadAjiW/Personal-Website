import React from "react"
import "./Section.css"
import Panel from "../../components/Panel/Panel"

const Section : React.FC<{panelNum: number, id?: string, title?: string, subtitle?: string}> = ({panelNum: pageNum, id, title, subtitle}) => {
    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center xl:gap-10 gap-5">
                <h2 className="section-title">
                  {title}
                </h2>
                <p className="section-subtitle">
                  {subtitle}
                </p>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Section
  