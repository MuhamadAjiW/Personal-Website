import React from "react"
import "./Personal.css"
import Panel from "../../components/Panel/Panel"

const Personal : React.FC<{panelNum: number, id?: string}> = ({panelNum: pageNum, id}) => {
    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex xl:flex-row xl:gap-10 xl:w-[60vw] flex-col gap-10 p-10 w-full">
                <div className="flex items-center justify-center">
                  <img className="min-w-96" src="/src/assets/images/personal.png" alt="Image of the website's owner"/>
                </div>
                

                <div className="flex flex-col justify-center">
                  <h2 className="personal-title">
                      My name is Muhamad Aji Wibisono
                  </h2>
                  <p className="personal-subtitle mt-10">
                    I'm an undergraduate informatics student at Institut Teknologi Bandung. This is my website, I guess?
                  </p>
                </div>
              </div>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Personal
  