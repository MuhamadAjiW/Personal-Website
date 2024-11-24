import React from "react"
import Panel from "@/components/custom-ui/Panel/Panel"
import "./Hello.css"

const Hello: React.FC<{ panelNum: number, id?: string }> = ({ panelNum: pageNum, id }) => {
  return (
    <>
      <Panel panelNum={pageNum} id={id}>
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="hello-title">
            Hi! I'm Awe 👋
          </h1>
        </div>
      </Panel>
    </>
  )
}

export default Hello
