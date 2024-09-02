import React, { forwardRef} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
const Skills=()=> {



  const [skills, setSkills] = useState([])
 
  const getMySkills = async () => {
    const response = await axios.get("https://portfolio-backend-td74.onrender.com/api/v1/skill/getall", { withCredentials: true });
    setSkills(response?.data?.skill)
  }
  useEffect(() => {
    getMySkills()
  }, [])
  console.log(skills)
  return (


    <div  id="skills" className="w-full flex flex-col gap-8 mt-8 text-[2rem] justify-center items-center  sm:gap-12">
      <h1 className='font-extrabold text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] sm:tracking-[10px] mx-auto w-fit'>

        SKILLS
      </h1>


      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
        {skills && skills.map((element) => {
          return (
            <div className="h-fit p-7 flex flex-col justify-center border-slate-200 border-2 items-center gap-3" key={element._id}>
              <img
                src={element?.svg && element?.svg?.url}
                alt="skill"
                className="h-10  w-auto object-contain overflow-hidden" />
              <span className="  text-muted-foreground text-center overflow-hidden">
                {element.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Skills
