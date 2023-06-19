
import "./ProjectCards.css"
import "./ProjectsCardsMedia.css"

const ProjectCards = ({ProjectHelper}) =>{
    console.log(ProjectHelper.V_URL)
    return(<>
  <div className="pro-card-outer">
  <img src={ProjectHelper.imgs} className="pro-img"  alt="project"/>
    <div className="pro-deatil-box">
        <span className="project-name">{ProjectHelper.name}</span>
        <span className="discreption">{ProjectHelper.text}</span>
        <div className="pro-btn-group">
        <span className="link-btn"><a href={ProjectHelper.V_URL} title="Go live" target="blank"><i className="fa-solid fa-link"></i></a></span>
        <span className="link-btn"><a href={ProjectHelper.G_URL} title="View code" target="blank"><i className="fa-brands fa-github"></i></a></span>
        </div>
    </div>
  </div>
  
    </>)
}

export default ProjectCards