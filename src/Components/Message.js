import { API_BASE_URL } from "../apiURL";
import { useState } from "react";

const Message = (props) => {
    const [messageBody, setMessageBody] = useState(props.data.body)

    const handleOnSubmit = (event) => {
        event.preventDefault()

        console.log("form submitted\nmessageBody: ", messageBody);
        fetch(`${API_BASE_URL}message/${document.cookie.split("=")[1]}/${props.data._id}`, {
            method: "PATCH",
            body: JSON.stringify({
              body: messageBody
            }),
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    const handleOnChange = (event) => {
        if (event.target.id === "messageBodyInput") {
            setMessageBody(event.target.value);
        }
    }

    let editForm = (
        <form onSubmit={handleOnSubmit}>
            <input type="text" id="messageBodyInput" placeholder="Message Body" value={messageBody} onChange={handleOnChange}/>
            <input type="submit" id="messageSubmitInput" value="Submit" />
        </form>
    )

    const handleOnDelete = () => {
        fetch(`${API_BASE_URL}message/${document.cookie.split("=")[1]}/${props.data._id}`, {method:"DELETE"})
    }

    return (
        <div>
            <p>This is a message!</p>
            <p>from: {props.data.author}</p>
            <p>to: {props.data.receivers}</p>
            <p>subject: {props.data.subject}</p>
            {props.data.canDelete? editForm: <p>message: {messageBody}</p>}
            {props.data.canDelete? <button onClick={handleOnDelete}>Delete</button>: ""}
        </div>
    )
}

export default Message; 