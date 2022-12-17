import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams()
    console.log(id)
    const [project , setProject] = useState([])
    useEffect( ()=>{
        fetch(`https://portfolio-server-henna.vercel.app/project/${id}`)
        .then(res => res.json())
        .then(data => {
            setProject(data.data)
        })
    } ,[id])
    console.log(project[0])
    return (
        <div className='pt-28'>
            <Link to="/"><button className='btn btn-outline btn-accent'>Home</button></Link>
            {
                project?.length && <> 
                
                <h2 className='text-2xl text-orange-400'>{project[0].name} project details</h2>
         <div className='detailsCard w-3/4 mx-auto border-2 border-accent p-5 mt-9'>
                <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    <div><img src={project[0].images[0]} alt="" /></div>
                    <div><img src={project[0].images[1]} alt="" /></div>
                    <div><img src={project[0].images[2]} alt="" /></div>
                </div>

                <div className='text-left py-5'>
                  <h2 className='text-xl font-bold text-cyan-500'>  Name: {project[0].name}</h2>
                  <div>
                    <h2 className='text-xl text-cyan-500 font-bold'>Technology are used: </h2>
                    <ul>
                    {
                        project[0].bulletPoints.map( (point, i) => <li key={i}>{point}</li> )
                    }
                  </ul>
                  </div>
                  <div className='mt-10'>
                    <a className='mr-6'  target="_parthive" href={project[0].liveSite}><button className='btn btn-info '>Live site</button></a>
                    <a className='mr-6' target="_onthive" href={project[0].clientRepo}><button className='btn btn-info '>Client side code</button></a>
                    <a className='sm:mt-5' target="_hola" href={project[0].serverRepo}><button className='btn btn-info '>Server side code</button></a>
                  </div>
                </div>

         </div>
                </>
            }

        </div>
    );
};

export default ProjectDetails;