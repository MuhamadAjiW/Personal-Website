import React from "react"
import "./Section.css"
import Panel from "../../components/Panel/Panel"

const Section : React.FC<{panelNum: number, id?: string, title?: string, subtitle?: string, header?: boolean}> = ({panelNum: pageNum, id, title, subtitle, header}) => {
    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center xl:gap-10 gap-5">
                {header?
                <h2 className="section-title">{title}</h2>
                :
                <p className="section-title">{title}</p>
                }
                <p className="section-subtitle">
                  {subtitle}
                </p>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Section
  