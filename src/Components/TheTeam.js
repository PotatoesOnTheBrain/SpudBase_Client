import "../TheTeam.css"
import image from "../profile_picture.png"

function TheTeam() {
  return (
      <>
      <h1 className="OurTeam">Our Team</h1>
    <div className="TheTeam">
      
      
        {/* <div className="ID_photo"> */}
                <img className="photo1" src={image} alt="Danny's Photo"  />
                <img className="photo2" src={image}  alt="Andre's Photo"  />
                <img className="photo3" src={image}  alt="Andrew's Photo"  />
        {/* </div> */}
      <div ClassName="Danny">
        <h3>Danny Kwolek</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor fringilla metus, id pellentesque odio lacinia id. Vivamus ac blandit urna, eget fringilla ante. Aenean in fermentum odio. Praesent hendrerit eleifend bibendum. Aliquam tincidunt mauris sit amet dolor tincidunt ultrices. Etiam ligula turpis, elementum in porta a, facilisis ut quam. Suspendisse ac sapien odio.</p>
      </div>
      
      <div ClassName="Andre">
        <h3>Andre Booth</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor fringilla metus, id pellentesque odio lacinia id. Vivamus ac blandit urna, eget fringilla ante. Aenean in fermentum odio. Praesent hendrerit eleifend bibendum. Aliquam tincidunt mauris sit amet dolor tincidunt ultrices. Etiam ligula turpis, elementum in porta a, facilisis ut quam. Suspendisse ac sapien odio.</p>
      </div>

      <div ClassName="Andrew">
        <h3>Andrew Neilson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor fringilla metus, id pellentesque odio lacinia id. Vivamus ac blandit urna, eget fringilla ante. Aenean in fermentum odio. Praesent hendrerit eleifend bibendum. Aliquam tincidunt mauris sit amet dolor tincidunt ultrices. Etiam ligula turpis, elementum in porta a, facilisis ut quam. Suspendisse ac sapien odio.</p>
      </div>
      


    </div>
    </>
  );
}

export default TheTeam;