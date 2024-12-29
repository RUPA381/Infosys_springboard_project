import React from 'react';

function Navbar({ onMenuClick }) {
  return (
    <div className="flex justify-between bg-cyan-950 items-center">
      <div className="flex space-x-3 items-center">
        <div className="w-[15%] h-[15%]">
          <img
            src="https://i.ibb.co/kqX6J8W/freepik-background-27962.png"
            alt="CommUnity Logo"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl font-extrabold">CommUnity</h1>
          <p className="text-[10px]">Seamless Community Interaction and Management</p>
        </div>
      </div>
      <div className="flex text-white">
        <div className="px-5 cursor-pointer" onClick={() => onMenuClick('home')}>Home</div>
        <div className="px-5 cursor-pointer" onClick={() => onMenuClick('about')}>About Us</div>
        <div className="px-5 cursor-pointer" onClick={() => onMenuClick('contact')}>Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
