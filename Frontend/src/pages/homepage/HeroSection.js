import React from 'react'
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const jwt=localStorage.getItem('jwt');
  const userDetails=useSelector(store=>store.auth?.userDetails);
  const role=useSelector(store=>store.auth.user?.role)
  const navigate=useNavigate();
  const handleNavigation = () => {
    if (jwt && userDetails) {
      navigate('/community'); 
    }
    else {
      navigate('/auth');
    }
  };
  return (
    <div style={divStyle} className='flex items-center justify-center text-cyan-950'>
        <div className='w-[60%] flex justify-center items-center h-[100%] text-center flex-col'>
            <p>Welcome to Community, the ultimate platform designed to streamline housing society management and 
                foster community connections. Whether you're a resident, administrator, or non-resident, Community brings 
                convenience to your fingertips with a comprehensive set of features tailored for everyone.</p>
               <button className=" px-5 py-2 mt-3 rounded-md text-white bg-cyan-950" onClick={handleNavigation}>Get Started</button>
        </div>
    </div>
  )
}

const divStyle={
    backgroundImage:
    `linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ), 
      url("https://i.ibb.co/XyFt845/Form-Image.png")
    `,
    height:'87vh',
    width:'100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}