import "./ProjectCounter.css"
import "./ProjectCounterMedia.css"
import { ProjectHelper } from "../../../Assets/Pojects_assets/ProjectsData"
import ProjectCards from "./ProjectCards"

const ProjectCounter = () =>{
    // console.log(ProjectHelper)
    return(<>
        <div className="project-counter" id="project">
        <div className="project-inner-box">
            <h1 className="pro-heading"> Projects</h1>
            <div className="project-display">
                {ProjectHelper.map((value)=><ProjectCards ProjectHelper={value} key={value.id} />)}
            </div>
            </div>
        </div>
    </>)
}


export default ProjectCounter