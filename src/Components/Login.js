import { useEffect } from "react";
import { API_SELF_URL } from "../selfURL";

function Login() {
  /* if we have a session cookie, redirect to profile page
  */
  let redirectURI = `${API_SELF_URL}bouncer`
  let OAuthURL = `https://github.com/login/oauth/authorize?client_id=26d9e4b571324e3c62bd&state=thisisaveryrandomandsecurestring&redirect_uri=${redirectURI}`
  
  return (
    <div className="Login">
      <a href={OAuthURL}>Log In</a>
    </div>
  )
}

export default Login;