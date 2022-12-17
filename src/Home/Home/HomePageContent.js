import React, { useEffect, useRef, useState } from 'react';
import lottie from "lottie-web"
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';
import soft from './soft_dev.json'
import Img from "../../assets/images/work-stress.png"
import { Player } from '@lottiefiles/react-lottie-player';
const HomePageContent = () => {
    const [state] = useState({
        title: "MERN Stack Web Developer",
        title1: "Web Developer",
        title2: "Full Stack Web Developer",
        title3: "Frontend Developer"
    })

    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20'>
            <div className='flex flex-col justify-center'>
                <p className='text-cyan-700 text-3xl '>Hi,
                    I'm Parthive </p>
                <div className='text-orange-400 text-2xl'>
                    <Typewriter options={{
                        autoStart: true, loop: true, delay: 40, strings: [
                            "MERN Stack Developer",
                            "Full-Stack Web Developer",
                            "Front-End-Developer"
                        ]
                    }}></Typewriter>
                </div>

                <div>
                    <p className=' mt-6 text-xl p-9'>I'm a React base front-end developer. I'm also comportable with Node.js, Express.js and MongoDB. I have done many Full-stack projects. </p>
                    <a target="_blank" href="https://drive.google.com/file/d/1iPWY2_L19fh7f_cZrjOOmdnx5wDlXhDC/view"> <button className='btn btn-outline btn-accent'>Resume</button></a>
                    <div>

                    </div>
                </div>

            </div>

            <div className='flex justify-center'>
                   <img src={Img} alt="img" / >
            </div>


        </div>
    );
};

export default HomePageContent;