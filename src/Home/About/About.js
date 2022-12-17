import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FcApproval } from "react-icons/fc";
import SocialMedia from '../SocialMedia/SocialMedia';
import Img from './../../assets/images/parthive (2).png'

const About = () => {
    return (
        <div className='pt-28' id='about' > 
        <div>
            <h2 className='text-center text-3xl text-accent '>About Me</h2>
        </div>

        <div className='about-container grid gap-6 grid-cols-1  lg:grid-cols-2  md:grid-cols-2' >

        <div className='flex justify-center items-center p-12 text-xl'>

        <div>
        <p>I'm Parthive shill. I'm a MERN Stack developer who learned full stack web development and certified by Programming-hero. I'm pationate about web development and try every time to learn new things and technology. I have done many Full stack projects.</p>
        <div>
            <h2 className='text-2xl mt-8 text-cyan-400'>My Social Media Handles</h2>
            
        <div className='pt-5 text-3xl'>
           <div className='flex justify-center'>
            <div className='mr-6'>
                <a target="_github" href="https://github.com/dev-parthive"><BsGithub className='hover:text-cyan-600'></BsGithub></a>
                </div> 
          <div className='mr-6'>
            <a target="_asf" href="https://www.linkedin.com/in/parthive-shill-b3a9a122a/"><BsLinkedin className='hover:text-cyan-400'></BsLinkedin></a>
            </div> 
            
             <div><a target="_tiwtter" href="https://twitter.com/dev__parthive"><BsTwitter className='hover:text-cyan-400'></BsTwitter></a></div>
           </div>
        </div>
        </div>
        </div>
        </div>

        <div className='flex justify-center'>
            <img src={Img} alt="" />

        </div>
        </div>

            
        </div>
    );
};

export default About;