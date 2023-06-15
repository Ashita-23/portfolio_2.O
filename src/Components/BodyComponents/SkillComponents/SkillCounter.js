import './SkillCounter.css'
import "./SCMedia.css"
import SkillCards from "./SkillCards";
import hashtagImg  from '../../../Assets/Component_images/hashTag.png'
import { skillsName } from '../../../Assets/Skills_assets/skillsData';

const SkillCounter = () => {
  // console.log(skillsName)
  return (
    <>
      <div className="skill-counter" id="skills">
        {/* <h1 ">Skill</h1> */}
        <div className="skill-inner-box">
        <div className="skill-display">
              {
          skillsName.map((cards) => {return(<SkillCards skillProp={cards} key={cards.id} />) })
         }
        </div>
        <div className="hash-img-outer">
        <figcaption className="skill-heading" > Skills </figcaption>
      <img src={hashtagImg} alt="skillImage" className="hashImage" />
        </div>
        </div>
      </div>
    </>
  );
};

export default SkillCounter;