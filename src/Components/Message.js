


const Message = (props) => {
    console.log(props)
return (
    <div>
        <p>This is a message!</p>
        <p>from: {props.data.author}</p>
        <p>to: {props.data.receivers}</p>
        <p>subject: {props.data.subject}</p>
        <p>message: {props.data.body}</p>
    </div>
)

}

export default Message; 