import React from "react"
import Panel from "@/components/custom-ui/Panel/Panel"
import "./Personal.css"

const Personal: React.FC<{ panelNum: number, id?: string }> = ({ panelNum: pageNum, id }) => {
  return (
    <>
      <Panel panelNum={pageNum} id={id}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex xl:flex-row xl:gap-10 xl:w-[60vw] flex-col gap-10 p-10 w-full">
            <div className="flex items-center justify-center">
              <img className="min-w-96 max-h-96" src="/images/personal.png" alt="Image of the website's owner" />
            </div>


            <div className="flex flex-col justify-center">
              <h2 className="personal-title">
                Muhamad Aji Wibisono
              </h2>
              <p className="personal-subtitle">
                I'm a 3rd year undergraduate informatics engineering student at Institut Teknologi Bandung. This is my website, I made this because why not.
              </p>
              <p className="personal-subtitle">
                Nice to meet you, I guess?
              </p>
            </div>
          </div>
        </div>
      </Panel>
    </>
  )
}

export default Personal
