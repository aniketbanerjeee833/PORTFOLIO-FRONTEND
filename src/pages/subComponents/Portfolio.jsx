import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom"

export default function Portfolio({showNav}) {
    const [projects, setProjects] = useState([])
    const [viewAll, setViewAll] = useState(true);
    const getMyProjects = async () => {
        try {
            const response = await axios.get("https://portfolio-backend-td74.onrender.com/api/v1/project/getall", { withCredentials: true });
            setProjects(response?.data?.project)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getMyProjects()
    }, [])
    //console.log(projects)
    return (

        <div className="w-full flex flex-col gap-8 mt-8 text-[2rem] justify-center items-center ">
            <h1 className='font-extrabold text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[26px] md:leading-[37px] lg:leading-[40px] sm:tracking-[10px] 
          mx-auto w-fit ' >

                MY PROJECTS
            </h1>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-4'>
                {viewAll ? (projects && projects?.map((element) => {
                   
                    return (
                        
                            <Link to={`/project/${element._id}`} target="_blank" key={element._id} >
                                <img
                                    src={element?.projectBanner && element.projectBanner?.url}
                                    alt={element.title} className=' border-2 border-slate-200 w-full h-72'/>
                            </Link>
                        
                    )
                })) : (projects && projects.slice(0, 9)?.map((element) => {
                    return (
                        
                            <Link to={`/project/${element._id}`} key={element._id}>
                                <img
                                    src={element.projectBanner && element.projectBanner.url}
                                    alt={element.title}
                                />
                            </Link>
                        
                    )
                }))}
                {projects && projects.length > 9 && (
                    <div className="w-full text-center my-9">
                        <button className="w-52" onClick={() => setViewAll(!viewAll)}>
                            {viewAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </div>

    )
}
