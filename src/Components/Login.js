import "../Styling/Login.css"
import { SELF_URL } from "../selfURL";
import { CLIENT_ID } from "../clientId";


function Login() {

  let redirectURI = `${SELF_URL}`
  let OAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=thisisaveryrandomandsecurestring&redirect_uri=${redirectURI}`
  
  return (
    <div className="Login">
      <img src={require("../Assets/SpudBase.png")} />
      {document.cookie.split("=")[1]? <p>you are logged in</p> : <a href={OAuthURL}>Log In</a> }
    </div>
  )
}

export default Login;