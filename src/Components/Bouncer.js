import { useEffect } from "react";
import { useNavigate } from "react-router";
import { API_BASE_URL } from "../apiURL";

const Bouncer = () => {

    let navigate = useNavigate();

    function getQueryVariable(variable)
    {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    useEffect(() => {
        fetch(`${API_BASE_URL}oauth/authorize?code=${getQueryVariable("code")}`)
        .then(response => response.json())
        .then(data => {
            if(data.session_id) {
                document.cookie = `session_id=${data.session_id}`;
                navigate("/profile");
            }
        })
        .catch(error => console.log(error))
    })

    return (
        <div className="bouncer">
            <h1>You've reached the bouncer</h1>
            <p>code is: {getQueryVariable("code")}</p>
            <p>state is: {getQueryVariable("state")}</p>
        </div>
    )
}

export default Bouncer;