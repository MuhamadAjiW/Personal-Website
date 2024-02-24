import React from "react"
import "./Message.css"
import Panel from "../../components/Panel/Panel"

const Message : React.FC<{panelNum: number, id?: string}> = ({panelNum: pageNum, id}) => {
    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center gap-5">
                <h3 className="message-title">
                    Message me anonymously!
                </h3>
                <input
                    id="sender-name"
                    type="text"
                    className="message-name-area"
                    placeholder="Your Name or alias or whatever"
                    />
                <textarea
                    id="sender-name"
                    className="message-text-area"
                    placeholder="Your message"
                />
                <button className="message-text-button" onClick={() => console.log('Submit')}>
                    Submit
                </button>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Message
  