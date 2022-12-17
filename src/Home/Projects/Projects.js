import React, { useEffect } from 'react';
import Lapzone from "../../assets/projects/screencapture-lap-zone-web-app-2022-12-12-16_34_28 (1).png"
import Greenchilli  from '../../assets/projects/screencapture-green-chilli-47776-web-app-2022-12-12-16_35_42.png'
import webmaster from '../../assets/projects/screencapture-web-master-f6ceb-web-app-courses-2022-12-12-16_36_34.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    useEffect(()=>{

        fetch('projects.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div id="project" className=" w-3/4 mx-auto py-10 pt-28">
            <h2 className='text-center text-3xl text-accent mb-9'>Projects</h2>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>

                {/* Lap zone  */}
                <div className='border border-sky-500'>
                    <div className='overflow-y-auto h-52 w-full '>
                        <img src={Lapzone} alt="" className='w-full' />

                    </div>
                    <div className='bg-base-300 py-5 lg:mb-0 mb-5'>

                    <div>
                    <div className="divider text-xl ">Lap-Zone</div>
                <h2>Second Hand laptop selling site</h2>

                    </div>

                    <div className='grid gap-2  grid-cols-2 lg:grid-cols-3 md:grid-cols-3'>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>React</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Firebase</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Express</p>
                        </div>
                        <div className='border-2 lg:col-span-1 md:col-span-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>MongoDB</p>
                        </div>
                    </div>

                    {/* live site and github link  */}
                    <div className='flex justify-center mt-5 ' >
                        <div >
                            <a target="_blank" href="https://lap-zone.web.app/"><button className='btn btn-outline btn-accent mr-5'>Live site</button></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/dev-parthive/Lap-Zone-client-side"><button className='btn btn-outline btn-accent '>Source Code</button></a>
                        </div>
                    </div>
                    <div className='mt-5'>
                      <Link to={`/project/${1}`}> 
                      <button className='btn btn-primary'>Details</button>
                      </Link>
                    </div>
                    </div>
                </div>

                {/* Green Chillil  */}
                <div className='border border-sky-500'>
                    <div className='overflow-y-auto h-52 w-full'>
                        <img src={Greenchilli} alt="" />

                    </div>
                    <div className='bg-base-300 py-5 lg:mb-0 mb-5'>

                    <div>
                    <div className="divider text-xl ">Green-Chilli</div>
                <h2>A cloud Kitchen</h2>

                    </div>

                    <div className='grid gap-2  grid-cols-2 lg:grid-cols-3 md:grid-cols-3'>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>React</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Firebase</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Express</p>
                        </div>
                        <div className='border-2 lg:col-span-1 md:col-span-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>MongoDB</p>
                        </div>
                    </div>

                    {/* live site and github link  */}
                    <div className='flex justify-center mt-5 ' >
                        <div >
                            <a target="_blank" href="https://green-chilli-47776.web.app/"><button className='btn btn-outline btn-accent mr-5'>Live site</button></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/dev-parthive/Green-chilli-cient-side"><button className='btn btn-outline btn-accent '>Source Code</button></a>
                        </div>
                    </div>
                    <div className='mt-5'>
                      <Link to={`/project/${2}`}>  <button className='btn btn-primary'>Details</button></Link>
                    </div>
                    </div>
                </div>

                {/* Web Master  */}
                <div className='border border-sky-500'>
                    <div className='overflow-y-auto h-52 w-full'>
                        <img src={webmaster} alt="" />

                    </div>
                    <div className='bg-base-300 py-5 lg:mb-0 mb-5'>

                    <div>
                    <div className="divider text-xl ">Web-Master</div>
                <h2>Online course buying platform</h2>

                    </div>

                    <div className='grid gap-2  grid-cols-2 lg:grid-cols-3 md:grid-cols-3'>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>React</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Firebase</p>
                        </div>
                        <div className='border-2 border-accent rounded-xl px-2 py-1 m-2'>
                            <p className=''>Express</p>
                        </div>
                        <div className='border-2 lg:col-span-1 md:col-span-2 border-accent rounded-xl px-1 py-1 m-2'>
                            <p className=''>MongoDB</p>
                        </div>
                    </div>

                    {/* live site and github link  */}
                    <div className='flex justify-center mt-5 ' >
                        <div >
                            <a target="_blank" href="https://web-master-f6ceb.web.app/"><button className='btn btn-outline btn-accent mr-5'>Live site</button></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://github.com/dev-parthive/Web-master-client-side"><button className='btn btn-outline btn-accent '>Source Code</button></a>
                        </div>
                    </div>
                    <div className='mt-5'>
                       
                       <Link to={`/project/${3}`}>

                       <button className='btn btn-primary'>Details</button>

                       </Link>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;