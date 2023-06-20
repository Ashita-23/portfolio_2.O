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
            Self taught Frontend Developer.I have intermediate level of skill in
            React| Javascript| GitAndGithub| JSX| Tailwind| Bootstrap| Css|
            Html.I also have beginner level skill in React-Router and Redux.
          </p>
          <p className="about-text">
            Collaborative, team player, and proficient in working with
            interdisciplinary teams and executing goal-oriented projects.
            Strongly interested in obtaining a Frontend Developer position to
            enhancing my skills and knowledge.
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
