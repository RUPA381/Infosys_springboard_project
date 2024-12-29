import React from 'react'

function About() {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <div className='flex flex-col justify-center p-5 items-center w-[70%] text-center text-cyan-950 space-y-5'>
            <h1 className='text-xl font-extrabold'>About CommUnity</h1>
            <p>Our website is dedicated to providing seamless interaction and management within our community.
                 We strive to offer the best services to ensure a cohesive and supportive environment for all members.</p>
        </div>
        <div className='flex flex-col justify-center p-5 items-center w-[80%] text-center bg-cyan-950 space-y-5 text-white'>
            <h1 className='text-xl font-bold'>Why CommUnity?</h1>
            <p>Community makes society management simple and efficient with seamless account management, 
                instant access to a digital noticeboard, and easy online maintenance payments. Residents can raise and track 
                complaints, join clubs, and share personal recommendations. Admins can post commercial updates and conduct polls.
                Stay informed with emergency contacts, security personnel details, and real-time WhatsApp notifications, 
                ensuring a connected and engaged community experience.</p>
        </div>
    </div>
  )
}

export default About