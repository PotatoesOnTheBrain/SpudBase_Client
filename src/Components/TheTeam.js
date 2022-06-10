import "../Styling/TheTeam.css"
import image1 from "../Assets/Danny_photo.png"
import image2 from "../Assets/Andre_pic.jpg"
import image3 from "../Assets/Andrew_photo.jpg"


function TheTeam() {
  return (
      <>
      <h1 className="OurTeam">Our Team</h1>
    <div className="TheTeam">
      
      
        {/* <div className="ID_photo"> */}
                <img className="photo1" src={image1} alt="Danny's Photo"  />
                <img className="photo2" src={image2}  alt="Andre's Photo"  />
                <img className="photo3" src={image3}  alt="Andrew's Photo"  />
        {/* </div> */}
      <div ClassName="Danny">
        <h3>Danny Kwolek</h3>
            <p>My goal is to become a full scale systems architect. I love planning out every piece of the puzzle to make a bigger picture that is worth looking at.</p>
      </div>
      
      <div ClassName="Andre">
        <h3>Andre Booth</h3>
            <p>My goal is to be a full stack developer. My interests are playing basketball and connecting with people.</p>
      </div>

      <div ClassName="Andrew">
        <h3>Andrew Neilson</h3>
        <p>I'm a full-stack developer from Houston, Texas. My interest in this project stems from a need to connect with other developers, and I helped work on the front end using React and CSS.</p>
      </div>
      


    </div>
    </>
  );
}

export default TheTeam;