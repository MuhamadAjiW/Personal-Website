import React from "react"
import "./Showcase.css"
import Page from "../../components/Page/Page"

const Showcase : React.FC<{
    pageNum: number,
    id?: string, 
    title: string, 
    desc: string, 
    show_path: string
}> = ({pageNum, id, title, desc, show_path}) => {
    return (
      <>
        <Page pageNum={pageNum} id={id}>
            <div className="flex h-full w-full items-center justify-center">                
                <div className="flex flex-col justify-center w-[80%]">
                    <div className="flex items-center justify-center">
                        <img className="min-w-96" src={show_path} alt={"Image of " + title}/>
                    </div>
                    <h2 className="showcase-title">
                        {title}
                    </h2>
                    <p className="showcase-subtitle mt-10">
                        {desc}
                    </p>
                </div>
            </div>
        </Page>
      </>
    )
  }
  
  export default Showcase
  