import "../Convo.css"
import { useEffect, useState } from "react";
import Message from './Message'

function Convo() {

  const [messageData, setMessageData] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/message/${document.cookie.split("=")[1]}`)
    .then(response => response.json())
    .then(data => setMessageData(data.messages))
    .catch(error => console.log(error))
  }, [])

let messageArray = messageData.map((value) => {
return <Message data={value}/>
})


  return (
    <div className="Convo">
     <h1>Conversations</h1>
     {messageArray}
    </div>
  );
}

export default Convo;
