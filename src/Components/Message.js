import { API_BASE_URL } from "../apiURL";

const Message = (props) => {
    console.log(props)
    const handleOnDelete = () => {
    console.log("delete id=",props.data._id)
    fetch(`${API_BASE_URL}message/${document.cookie.split("=")[1]}/${props.data._id}`, {method:"DELETE"})


    }
return (
    
    <div>
        <p>This is a message!</p>
        <p>from: {props.data.author}</p>
        <p>to: {props.data.receivers}</p>
        <p>subject: {props.data.subject}</p>
        <p>message: {props.data.body}</p>
        {props.data.canDelete? <button onClick={handleOnDelete}>Delete</button>: ""}
       
        
    </div>
    
)

}

export default Message; 