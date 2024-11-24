import React from "react"
import Panel from "@/components/custom-ui/Panel/Panel"

const Clear: React.FC<{ pageNum: number, id?: string }> = ({ pageNum, id }) => {
  return (
    <>
      <Panel panelNum={pageNum} id={id}>
        <></>
      </Panel>
    </>
  )
}

export default Clear
