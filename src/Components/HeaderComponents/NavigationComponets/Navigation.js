import "./Navigation.css"
import "./NavigationMedia.css"


const Navigation = () => {

    return(<>
     <nav className="nav-outer">
        <ul className="link-list">
            <li><a href="#/"><i className="fa-solid fa-house-user"></i></a></li>
            <li><a href="#about"><i className="fa-solid fa-circle-info"></i></a></li>
            <li><a href="#skills"><i className="fa-solid fa-code"></i></a></li>
            <li><a href="#project"><i className="fa-regular fa-folder-open"></i></a></li>
            <li><a href="#contact"><i className="fa-regular fa-paper-plane"></i></a></li>
            </ul>    
     </nav>
    </>)
}

export default Navigation