
import './App.css';
import { IsUserOnline } from "./Assets/ProjectFunctions/IsUserOnline"
import NetworkStatus from "./Components/HeaderComponents/OnlineStatus/NetworkStatus"
import Navigation from "./Components/HeaderComponents/NavigationComponets/Navigation"
import Home from "./Components/HeaderComponents/HomeComponent/Home"
import About from "./Components/BodyComponents/AboutComponents/About"
import SkillCounter from "./Components/BodyComponents/SkillComponents/SkillCounter"
import ProjectCounter from "./Components/BodyComponents/ProjectComponents/ProjectCounter"
import ContactForm from "./Components/BodyComponents/ContactComponents/ContactForm"
import Footer from "./Components/FooterComponents/Footer"

function App() {
  const IsOnline = IsUserOnline()
if(!IsOnline) return <NetworkStatus></NetworkStatus>
  return ( <>
<Navigation></Navigation>
<Home></Home>
<About></About>
<SkillCounter></SkillCounter>
<ProjectCounter></ProjectCounter>
<ContactForm></ContactForm>
<Footer></Footer>

  </> );
}

export default App;
