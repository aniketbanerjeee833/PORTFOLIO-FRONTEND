import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { ExternalLink, Linkedin } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useThemeContext } from '../../context';
import { useRef } from 'react';
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    const [user, setUser] = useState("");
   

    const { isDark, setIsDark } = useThemeContext()
    const getMyProfile = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/user/portfolio/me", { withCredentials: true });
            //console.log(response)
            setUser(response?.data?.user);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMyProfile()
    }, [])
    //console.log(user)

    return (
        <>
            <div className=' w-full'>
                <div>
                    <h1  className='text-[1.5rem] overflow-x-hidden  sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4'>Hey I'm Aniket</h1>
                </div>
                <div>
                    <h1  className='text-2xl font-extrabold overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]' ></h1>
                    <Typewriter
          words={["FULLSTACK DEVELOPER", "STUDENT"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
                    
                </div>

                <div className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4  md:mt-8 lg:mt-10">


                    <Link to={user?.linkedInURL} target="_blank" className='cursor-pointer'>
                        <Linkedin className="text-sky-500 w-7 h-7" />
                    </Link>



                    <Link to={user?.githubURL} target="_blank" className='cursor-pointer border-2 border-black '>
                        <button className='flex flex-row items-center'>
                            <FaGithub className={`w-full h-full ${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`} />
                            <span className={`${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}>Github</span>
                        </button>
                    </Link>



                    <Link to={user?.resume && user?.resume?.url} target="_blank" className='cursor-pointer border-2 border-black'>
                        <button className='flex flex-row items-center'>
                            <ExternalLink className={`${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`} />
                            <span className={`${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}>Resume </span>
                        </button>
                    </Link>


                </div>
                <div>
                    <p className={`mt-8 text-xl tracking-[2px] ${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}>{user?.aboutMe}</p>
                    <hr className="my-8 md::my-10 " />
                </div>
            </div>
        </>
    )
}
