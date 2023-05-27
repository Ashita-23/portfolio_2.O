import "./About.css"
import DummyUser from "../../../Assets/Component_images/dummyUser.jpg"
import Resume from "../../../Assets/Component_images/ashita.pdf"

const About = () => {
  return (
      <div className="about-outer" id="about">
        <div className="about-inner">
          <div className="about-image-box">
            <figure className="about-figuer">
              <img src={DummyUser } alt="aboutImage" className="about-image" />
            </figure>
          </div>
          <div className="about-intro">
            <h1 className="about-title">About Me </h1>
            <p className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              debitis culpa non iure odit architecto officia eius magnam et.
              Culpa autem dolorem praesentium qui perferendis facilis facere
              fugit inventore in. Assumenda dolor minima maxime quas.
            </p>
            <p className="about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              debitis culpa non iure odit architecto officia eius magnam et.
              Culpa autem dolorem praesentium qui perferendis facilis facere
              fugit inventore in. Assumenda dolor minima maxime quas.
            </p>
            <button className="resume-btn" ><a href={Resume} download={"ashita.pdf"}>Resume <i className="fa-regular fa-circle-down"></i></a></button>
          </div>
        </div>
      </div>
 
  );
};

export default About