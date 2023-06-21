
import "./Home.css"
import "./HMedia.css"

import homeImg from "../../../Assets/Component_images/home_img.png"


const Home = () =>{

    return (<>
        <div className="home-outer" id="/">
 
        <div className="intro-box">
        <div className="intro-note">
            <h1 className="name-text"><span className="first-text">Hi,</span> I am Ashita </h1>
            <p className="title-text-box"><span className="sec-text">{ "Frontend Developer" }</span></p>
            <div className="home-btn-group">
            <button className="home-btn">
           <a href="https://github.com/Ashita-23" target="blank"><i className="fa-brands fa-github home-btns"></i></a></button> 
            <button className="home-btn">
           <a href="https://www.linkedin.com/in/ashita-kr/" target="blank"> <i className="fa-brands fa-linkedin-in home-btns"></i></a></button>
            </div>
            </div>
            <div className="intro-image">
                <figure><img src={homeImg} alt="homeImg" className="home-img"/></figure>
            </div>
          
            </div>
        </div>
        {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </>)
}

export default Home 
