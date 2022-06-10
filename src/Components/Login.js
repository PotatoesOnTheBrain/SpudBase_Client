import { SELF_URL } from "../selfURL";
import { CLIENT_ID } from "../clientId";
import { useNavigate } from "react-router";
import "../Styling/Login.css"


function Login() {

  if (document.cookie.split("=")[1]) {

  }

  let redirectURI = `${SELF_URL}`
  let OAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=thisisaveryrandomandsecurestring&redirect_uri=${redirectURI}`
  
  return (
    <div className="loginDiv">
      <img src={require("../Assets/SpudBase.png")}/>
      {document.cookie.split("=")[1]? <p>You are logged in</p> : <a href={OAuthURL}>Log In</a> }
    </div>
  )
}

export default Login;