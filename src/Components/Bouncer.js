import { useEffect } from "react";

const Bouncer = () => {

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

    // useEffect(() => {
    //     fetch(`https://github.com/login/oauth/access_token?code=${getQueryVariable("code")}&client_id=26d9e4b571324e3c62bd&client_secret=8f2c783b072778f70c463a1ef689e3b7c6a6a103`, {
    //         method: "POST"
    //     })
    //     .then(response => console.log(response));
    // })

    return (
        <div className="bouncer">
            <h1>You've reached the bouncer</h1>
            <p>code is: {getQueryVariable("code")}</p>
            <p>state is: {getQueryVariable("state")}</p>
        </div>
    )
}

export default Bouncer;