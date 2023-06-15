import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Components/HeaderComponents/NavigationComponets/Navigation';
import Home from './Components/HeaderComponents/HomeComponent/Home'
import About from './Components/BodyComponents/AboutComponents/About';
import SkillCounter from './Components/BodyComponents/SkillComponents/SkillCounter';
import ProjectCounter from './Components/BodyComponents/ProjectComponents/ProjectCounter';
import Contact from './Components/BodyComponents/ContactComponents/ContactForm';
import Footer from './Components/FooterComponents/Footer';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation></Navigation>
    <Home></Home>
    <About></About>
    <SkillCounter></SkillCounter>
    <ProjectCounter></ProjectCounter>
    <Contact></Contact>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
