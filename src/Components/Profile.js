import "../Styling/Profile.css";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router";
import { API_BASE_URL } from "../apiURL";

function Profile() {

  let navigate = useNavigate();

  useEffect(() => {
  if (!document.cookie.split("=")[1]) {
    navigate('/login')
  }
  }, [])
  

    console.log(document.cookie)
    console.log(document.cookie.split("=")[1]);

    const [userProfileData, setUserProfileData] = useState({})


    useEffect(()=> {
        fetch(`${API_BASE_URL}user/userinfo`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({session_id: document.cookie.split("=")[1]})
        })
          .then(response => response.json())
        //   .then(data => setUserProfileData(data))
          .then(data => {
            setUserProfileData(data)
            console.log(data)
            })
          .catch(error => {
            console.log(error)
          })
    }, [])

  return (
    <div className="Profile">
      {/* <div className="Repos">
        <h3>Repository 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          fringilla metus, id pellentesque odio lacinia id. Vivamus ac blandit
          urna, eget fringilla ante. Aenean in fermentum odio. Praesent
          hendrerit eleifend bibendum. Aliquam tincidunt mauris sit amet dolor
          tincidunt ultrices. Etiam ligula turpis, elementum in porta a,
          facilisis ut quam. Suspendisse ac sapien odio.
        </p>
      </div>
      <div className="Messages">
        <button className="button" >New Message</button>
        <div className="Message1">
          <p>From GithubUser</p>
          <p>This is a message! I have so much to say.</p>
        </div>
      </div> */}

      <div className="Bio">
        <div className="Name">
        <h3>{userProfileData.name? userProfileData.name : "None"}</h3>
        {/* <h3>LastName</h3> */}
        </div>
        <img className="img" src={userProfileData.avatar_url? userProfileData.avatar_url : ""} />
        <a className="button" href={userProfileData.html_url} target="_blank">Go To Github</a>
        <div className="Links">
        {/* <p>Bio</p> */}
        
        </div>
        <div>
          <h4>Bio: {userProfileData.bio? userProfileData.bio : "None"}</h4>
          {/* <h4>{userProfileData.followers_url? userProfileData.followers_url : "Loading followers"}</h4>
          <h4>{userProfileData.following_url? userProfileData.following_url : "Loading following"}</h4> */}
          <h4>Location: {userProfileData.location? userProfileData.location : "None"}</h4>
          <h4>Twitter: {userProfileData.twitter_username? userProfileData.twitter_username : "None"}</h4>
          <h3>Followers: {userProfileData.followers? userProfileData.followers : "None"}</h3>
           <h3>Following: {userProfileData.following? userProfileData.following : "None"}</h3>
          <h4>Public Repos: {userProfileData.public_repos? userProfileData.public_repos : "None"}</h4>

        </div>
      </div>
    </div>
  );
}

export default Profile;
