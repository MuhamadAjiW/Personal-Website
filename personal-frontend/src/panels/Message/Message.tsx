import React, { useContext, useState } from "react"
import "./Message.css"
import Panel from "../../components/Panel/Panel"
import axios from "axios";
import { Config } from "../../util/config";
import { ToastContext, ToastType } from "../../context/ToastContext";
import { LoadingContext } from "../../context/LoadingContext";

const Message : React.FC<{panelNum: number, id?: string}> = ({panelNum: pageNum, id}) => {
    const { setLoading: toggleLoading } = useContext(LoadingContext);
    
    const nameLimit: number = 128;
    const messageLimit: number = 2048;

    const { showToast } = useContext(ToastContext);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [nameCount, setNameCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0);

    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = async () => {
        toggleLoading(true);

        if(nameError || messageError){
            let errorString = "";

            if(nameError) errorString += "Name too long! "
            if(messageError) errorString += "Message too long! "
            showToast(ToastType.ERROR, "Error: " + errorString);
            
            toggleLoading(false);
            return;
        }

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
                showToast(ToastType.ERROR, "Server error: " + error.response.data.message ? error.response.data.message : error.response);
            } else if (error.request) {
                showToast(ToastType.ERROR, "No response from the server");
            } else {
                showToast(ToastType.ERROR, "Error setting up the request: " + error.message);
            }
        })
        .finally(() =>{
            toggleLoading(false);
        })
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setNameCount(e.target.value.length);
        setNameError(e.target.value.length > nameLimit);
    }

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        setMessageCount(e.target.value.length);
        setMessageError(e.target.value.length > messageLimit);
    }

    return (
      <>
        <Panel panelNum={pageNum} id={id}>
            <div className="flex flex-col h-full w-full items-center justify-center">
                <h3 className="message-title">
                    Message me anonymously!
                </h3>
                <input
                    id="message-name"
                    type="text"
                    className={`message-name-area ${nameError? "message-error": ""}`}
                    placeholder="Your Name or alias or whatever"
                    value={name}
                    onChange={onNameChange}
                    />
                <p className={`message-text-counter ${nameError? "message-error": ""}`}>{nameCount + "/" + nameLimit}</p>
                <textarea
                    id="message-message"
                    className={`message-text-area ${messageError? "message-error": ""}`}
                    placeholder="Your message"
                    value={message}
                    onChange={onMessageChange}
                />
                <p className={`message-text-counter ${messageError? "message-error": ""}`}>{messageCount + "/"  + messageLimit}</p>
                <button className="message-text-button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </Panel>
      </>
    )
  }
  
  export default Message
  