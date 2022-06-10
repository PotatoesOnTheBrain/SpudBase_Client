import { useEffect } from "react";
import { SELF_URL } from "../selfURL";
import { CLIENT_ID } from "../clientId";
function Login() {
  /* if we have a session cookie, redirect to profile page
  */
  let redirectURI = `${SELF_URL}bouncer`
  let OAuthURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=thisisaveryrandomandsecurestring&redirect_uri=${redirectURI}`
  
  return (
    <div className="Login">
      <a href={OAuthURL}>Log In</a>
    </div>
  )
}

export default Login;