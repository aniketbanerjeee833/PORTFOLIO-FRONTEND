import React, { useRef, useState } from 'react'
import Hero from './subComponents/Hero'
import Timeline from './subComponents/Timeline'

import Skills from './subComponents/Skills'
import Portfolio from './subComponents/Portfolio'
import Contact from './subComponents/Contact'
import MyApps from './subComponents/MyApps'
import { useThemeContext } from '../context'
import Footer from './subComponents/Footer'
import Header from './subComponents/Header'

export default function Home() {
  const{isDark,setIsDark}=useThemeContext()
  console.log(isDark)

  const{nav,showNav}=useState(true)
  //px-10 mt-10 flex flex-col gap-14 "
  return (
     <section className={`px-10  sm:mx-auto flex flex-col gap-14 ${isDark? "bg-slate-900 text-white border-white border-2"  : "bg-slate-100 text-black"}` } >
    <>
    <Header nav={nav}/>
       <Hero />
      <Timeline/>
     
      <Skills />
      <Portfolio showNav={showNav}/>
      <MyApps/>
      <Contact/>
      <Footer/>
      </>
   </section>
  )
}
