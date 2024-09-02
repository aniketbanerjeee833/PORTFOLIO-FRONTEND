import React from 'react'
import { useEffect } from 'react';
import {toast} from "react-toastify"
import axios from "axios"
import { useState } from 'react';
export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
        const response = await axios.post("https://portfolio-backend-td74.onrender.com/api/v1/message/send",    { senderName, message,email },
         { withCredentials: true  , headers: { "Content-Type": "application/json" }});
        //console.log(response)
        toast.success(response?.data?.message);
        setSenderName("");
        setMessage("");
       setEmail("")
       setLoading(false)
    } catch (error) {

      toast.error(error?.response?.data?.message);
        console.log(error)
        setLoading(false)
    }
}


  return (
    <div  className="flex flex-col gap-2 mt-8">
        <div className="relative mb-8">
          <h1
            className="flex gap-4 items-center 
            
            font-extrabold  text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] tracking-[10px] mx-auto w-fit">
            CONTACT
            <span className=" font-extrabold">ME</span>
          </h1>
          
        </div>
        <form onSubmit={handleMessage} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl">Your Name</label>
            <input className='border-2 border-black p-2'
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl">Message</label>
            <textarea className='border-2 border-black p-2 resize-none'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl">Email</label>
            <input className='border-2 border-black p-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-row justify-end">
          <button
               
                type="submit"
                disabled={loading}
                className=" cursor-pointer
                 text-slate-900  bg-gray-300 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-blue-800 inline-flex items-center"
              >SEND MESSAGE </button>
            </div>
        </form>
      </div>
    
  );
};
  

