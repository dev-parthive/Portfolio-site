import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import HomePageContent from './HomePageContent';
import './Home.css'
import Skill from '../About/Skills/Skill';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
           <div id="home">
           {/* <Navbar></Navbar> */}
            <HomePageContent></HomePageContent>
           </div>
            <About></About>
            {/* <Skill></Skill> */}
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;