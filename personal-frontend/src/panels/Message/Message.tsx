import React, { useContext, useState } from "react"
import "./Message.css"
import Panel from "../../components/Panel/Panel"
import axios from "axios";
import { Config } from "../../util/config";
import { ToastContext, ToastType } from "../../context/ToastContext";

const Message : React.FC<{panelNum: number, id?: string}> = ({panelNum: pageNum, id}) => {
    const { showToast } = useContext(ToastContext);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        await axios.post(Config.BE_URI + "/api/message" ,{
            from: name,
            content: message
        })
        .then(() => {
            setName("");
            setMessage("");
            showToast(ToastType.SUCCESS, "Message sent successfully");
        })
        .catch((error) => {
            if (error.response) {
                showToast(ToastType.ERROR, "Server error: " + error.response.data.message);
            } else if (error.request) {
                showToast(ToastType.ERROR, "No response from the server");
            } else {
                showToast(ToastType.ERROR, "Error setting up the request: " + error.message);
            }
        })
    }

    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center gap-5">
                <h3 className="message-title">
                    Message me anonymously!
                </h3>
                <input
                    id="message-name"
                    type="text"
                    className="message-name-area"
                    placeholder="Your Name or alias or whatever"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <textarea
                    id="message-message"
                    className="message-text-area"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="message-text-button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Message
  