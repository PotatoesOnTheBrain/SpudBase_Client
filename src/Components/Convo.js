import "../Convo.css";
import { useEffect, useState } from "react";
import Message from './Message';
import { useNavigate } from "react-router";
import { API_BASE_URL } from "../apiURL";

function Convo() {
  const [messageData, setMessageData] = useState([]);

  const [receiversInputString, setReceiversInputString] = useState("");
  const [subjectInputString, setSubjectInputString] = useState("");
  const [bodyInputString, setBodyInputString] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!document.cookie.split("=")[1]) {
      navigate('/login')
      return;
    }
    fetch(`${API_BASE_URL}message/${document.cookie.split("=")[1]}`)
    .then(response => response.json())
    .then(data => setMessageData(data.messages))
    .catch(error => console.log(error));
  }, []);

  let messageArray = messageData.map((value) => {
    return <Message data={value}/>;
  })

  const handleOnChange = (event) => {
    switch (event.target.id) {
      case "receiversInput":
        setReceiversInputString(event.target.value);
        break;
      case "subjectInput":
        setSubjectInputString(event.target.value);
        break;
      case "bodyInput":
        setBodyInputString(event.target.value);
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("receivers= ", receiversInputString.split(","), "\nsubject= ", subjectInputString, "\nbody= ", bodyInputString)
    fetch(`${API_BASE_URL}message/${document.cookie.split("=")[1]}`, {
      method: "POST",
      body: JSON.stringify({
        receivers: receiversInputString.split(","),
        subject: subjectInputString,
        body: bodyInputString
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <div className="Convo">
     <h1>Conversations</h1>
     <form onSubmit={handleOnSubmit}>
       <input id="receiversInput" type="text" placeholder="Receivers (comma separated)" value={receiversInputString} onChange={handleOnChange} />
       <input id="subjectInput" type="text" placeholder="Subject" value={subjectInputString} onChange={handleOnChange} />
       <input id="bodyInput" type="text" placeholder="Message" value={bodyInputString} onChange={handleOnChange} />
       <input id="submitInput" type="submit" value="Submit" />
     </form>
     {messageArray}
    </div>
  );
}

export default Convo;
