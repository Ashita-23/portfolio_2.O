import "./About.css";
import "./AboutMedia.css";
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
            Self taught Frontend Developer. At present I am working as Resource
            coordinator.I had complited my graduation in Commerce. Now I want
            to switch my career in IT.I have intermediate level of skills in
            React | Javascript | GitAndGithub | JSX | APIs | Tailwind | Bootstrap | Css | Html.
          </p>
          <p className="about-text">
            I had created multiple projects some of those are  Landing page | Swiggy clone |
            Portpolio web sites. So I also have basice skills in React-Router
            and Redux.
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
