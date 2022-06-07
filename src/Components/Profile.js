import "../Profile.css";

function Profile() {
  return (
    <div className="Profile">
      <div className="Repos">
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
        <button>New Message</button>
        <div className="Message1">
          <p>From GithubUser</p>
          <p>This is a message! I have so much to say.</p>
        </div>
      </div>

      <div className="Bio">
        <div className="Name">
        <h3>FirstName</h3>
        <h3>LastName</h3>
        </div>
        <button>Go to Github</button>
        <div className="Links">
        <p>Bio</p>
        <p>102 Followers</p>
        <p>72 Following</p>
        </div>
        <div>
          <h4>This is a bio blurb talking all about myself.</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
