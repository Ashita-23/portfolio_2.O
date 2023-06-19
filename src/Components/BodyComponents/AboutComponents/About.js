import "./About.css";
import "./AMedia.css";
import DummyUser from "../../../Assets/Component_images/dummyUser.jpg";
import Resume from "../../../Assets/Component_images/aashitaFD.pdf";

const About = () => {
  return (
    <div className="about-outer" id="about">
      <div className="about-inner">
        <div className="about-image-box">
          <figure className="about-figuer">
            <img src={DummyUser} alt="aboutImage" className="about-image" />
          </figure>
        </div>
        <div className="about-intro">
          <h1 className="about-title">About Me </h1>
          <p className="about-text">
            Self taught Frontend Developer.I had complited my graduation in Commerce.I have intermediate level of skill in React|
            Javascript| GitAndGithub| JSX| Tailwind| Bootstrap|   Css| Html.
          </p>
          <p className="about-text">
            I also have beginner level skill in
            React-Router and Redux.
          </p>
          <button className="resume-btn">
            <a href={Resume} download={"ashita.pdf"}>
              Resume <i className="fa-regular fa-circle-down"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
