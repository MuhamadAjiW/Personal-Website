import React from "react"
import Panel from "@/components/custom-ui/Panel/Panel"
import "./Showcase.css"

const Showcase: React.FC<{
    panelNum: number,
    id?: string,
    title: string,
    desc: string,
    show_path: string
}> = ({ panelNum: pageNum, id, title, desc, show_path }) => {
    return (
        <>
            <Panel panelNum={pageNum} id={id}>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col justify-center w-[80%]">
                        <div className="flex items-center justify-center">
                            <img className="min-w-96 max-w-[50%] max-h-96" src={show_path} alt={"Image of " + title} />
                        </div>
                        <h3 className="showcase-title">
                            {title}
                        </h3>
                        {desc.split("\\n").map((line, index) => (
                            <p key={index} className="showcase-subtitle">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </Panel>
        </>
    )
}

export default Showcase
