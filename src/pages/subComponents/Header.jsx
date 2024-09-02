import React from 'react'
import { useThemeContext } from '../../context'
import {  Moon, Sun } from 'lucide-react'
import { CiSun } from "react-icons/ci"
import {Link} from "react-router-dom"
export default function Header({nav}) {
  const{isDark,setIsDark}=useThemeContext()
  console.log(isDark)

  const handleDark=()=>
  {
    setIsDark(!isDark)
    localStorage.setItem('isDarkMode', !isDark)
  }

  return (
    <header className={` h-14  flex justify-end  ${isDark? "bg-slate-900 text-white"  : "bg-slate-100 text-black"}`} >

      
     
    <div className="flex justify-end h-12  pt-2 pr-6 pl-6">
  
      
      <button className="text-xl h-12 w-20 border-2 border-black " onClick={handleDark}>
       
        {/* <i className={`fa-solid fa-${isDark? "sun":"moon"}`} />
        &nbsp;&nbsp;{isDark? "lightmode":"darkmode"} */}
        <div className='flex flex-col justify-center items-center'>
        {isDark && isDark?(
          
       
         
          
          <>
            <CiSun className={` w-6 ${isDark ? "text-white" : "bg-slate-100 text-black"}`}/>
            <p className='text-sm'>Light Mode</p>
         
            </>
            
          ):(
            <>
             
              <Moon className={`${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}/>
              <p className='text-sm'>Dark Mode</p>
             
              </>
          )
        }
         </div>
       
      </button>
    </div>
  </header>
  )
}
