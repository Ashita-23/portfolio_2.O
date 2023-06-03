
import "./SkillCards.css"
import "./SkillCardsMedia.css"


const SkillCards = ({skillProp})=>{
   
  
    return(<>
   <div className="card-outer">
   <figuer className="logo-outer">
   <img src={skillProp.imgs} className="logo-img"/></figuer>
   <div className="card-text-box">
    <span className="title">{skillProp.name}</span>
    {/* <span className="skill-loading">Loading</span> */}
   </div>  
   </div>
    </>)
}

export default SkillCards