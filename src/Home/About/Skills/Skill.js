import React, { useState } from 'react';
import './Skill.css'
const Skill = () => {
    
    return (
        <div className='skills-container'>
            {/* html  */}
            <div className="skill">
                <div className="outer">
                    <div className="inner">

                        <div id="number">
                            90%
                        </div>
                    </div>
                </div>
                <div>
                    <span className='text-orange-500 text-xl'>HTML</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#e91e63" />
                            <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>


            </div>
        </div>
    );
};

export default Skill;