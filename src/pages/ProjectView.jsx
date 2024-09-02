
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom"
import { toast } from 'react-toastify'
import axios from "axios"
import { useThemeContext } from '../context';
import Header from './subComponents/Header';
export default function ProjectView() {

  const { isDark, setIsDark } = useThemeContext()
  console.log(isDark)
  const { id } = useParams()
  const navigate = useNavigate();


  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const handleReturnToPortfolio = () => {
    navigate("/")
  }

  const getProject = async () => {
    try {


      const response = await axios.get(`http://localhost:3000/api/v1/project/get/${id}`, {
        withCredentials: true
      })

      setTitle(response?.data?.project?.title);
      setDescription(response?.data?.project?.description)
      setTechnologies(response?.data?.project?.technologies)
      setStack(response?.data?.project?.stack)
      setDeployed(response?.data?.project?.deployed)
      setGitRepoLink(response?.data?.project?.gitRepoLink)
      setProjectLink(response?.data?.project?.projectLink)
      setProjectBanner(response?.data?.project?.projectBanner && response?.data?.project?.projectBanner?.url)

    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(() => {
    getProject();

  }, [])
  const descriptionList = description.split(". ");
  const technologiesList = technologies.split(", ");

  return (
    <>
    <Header/>
    <section className={`items-center justify-center sm:gap-4 sm:py-4 ${isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}>
      <div className='w-[100%] px-5  pb-5'>
      <div className=' mb-2 pt-4 flex     sm: justify-end items-end '>
      
        
            <button onClick={handleReturnToPortfolio}
              className="text-white bg-black w-52 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-slate-700 dark:focus:ring-slate-800">
              Return to Portfolio</button>
          </div>
        
        <div className="mt-10 flex flex-col gap-5 sm:pl-4">
          <div className=' flex flex-col  sm:col-span-4'>

            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <img src={projectBanner
              ? projectBanner
              : ""
            }
              alt="projectBanner"
              className="w-96 h-52 border-black border-2"
            />
          </div>
          <div className='flex flex-col sm:col-span-4'>
            <p className="text-2xl mb-2 font-semibold">Description:</p>

            <ul className='list-disc'>
              {descriptionList.map((element, index) => {
                return (
                  <li key={index}>{element}</li>
                )
              })}
            </ul>
          </div>
          <div className='flex flex-col sm:col-span-4'>
            <p className="text-2xl mb-2 font-semibold">Technologies:</p>

            <ul className='list-disc'>
              {technologiesList.map((element, index) => {
                return (
                  <li key={index}>{element}</li>
                )
              })}
            </ul>
          </div>
          <div className='flex flex-col sm:col-span-4'>
            <p className='text-xl font-semibold'>Deployed</p>
            <span>{deployed}</span>
          </div>

          <div className='flex flex-col sm:col-span-4'>
            <p className='text-xl font-semibold'>GitHub Repository Link</p>
            <Link to={gitRepoLink} target="_blank">
              {gitRepoLink}</Link>
          </div>

          <div className='flex flex-col sm:col-span-4'>
            <p className='text-xl font-semibold'>Project Link</p>
            <Link to={gitRepoLink} target="_blank">
              {projectLink}
            </Link>
          </div>
        </div>
      </div>

    </section>
    </>
  )

}
