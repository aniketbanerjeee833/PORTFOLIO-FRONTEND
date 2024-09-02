import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
export default function MyApps() {

    const[apps,setApps]=useState([])
    const getMyApps=async()=>
    {
        const response=await axios.get("http://localhost:3000/api/v1/softwareapplication/getall", { withCredentials: true });
        setApps(response?.data?.softwareapplications)
    }
    useEffect(()=>
    {
        getMyApps()
    },[])
    //console.log(apps)
  return (
    
       
        <div className="w-full flex flex-col gap-8 mt-8 text-[2rem] sm:gap-12 ">
        <h1 className='font-extrabold text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem]  sm:tracking-[10px] 
          mx-auto w-fit '> 
   
        MY APPS
      </h1>
        

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {apps&&apps.map((element)=>{
        return(
            <div className="h-fit p-7 flex flex-col justify-center border-slate-200 border-2 items-center gap-3" key={element._id}>
            <img
              src={element?.svg && element?.svg?.url}
              alt="skill"
              className="h-12  w-auto object-contain overflow-hidden"/>
            <span className=" text-center">
              {element?.name}
            </span>
          </div>
        )
      })}
      </div>
    </div>
  )
}
