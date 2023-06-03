
import "./ProjectCards.css"
import "./ProjectsCardsMedia.css"

const ProjectCards = ({ProjectHelper}) =>{
    console.log(ProjectHelper)
    return(<>
  <div className="pro-card-outer">
    {/* <figure > */}
  <img src={ProjectHelper[0].imgs} className="pro-img" />
    {/* </figure> */}
    <div className="pro-deatil-box">
        <span className="project-name">{ProjectHelper[0].name}</span>
        <span className="discreption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quasi, magni molestiae debitis odio natus!</span>
        <div className="pro-btn-group">
        <span className="link-btn"><a href="https://github.com/Ashita-23/Swiggy_Clone_Repo" title="Go live" target="blank"><i className="fa-solid fa-link"></i></a></span>
        <span className="link-btn"><a href="https://github.com/Ashita-23/Swiggy_Clone_Repo" title="View code" target="blank"><i className="fa-brands fa-github"></i></a></span>
        </div>
    </div>
  </div>
  
    </>)
}

export default ProjectCards