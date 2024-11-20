import React from 'react'
import "../../static/css/Register.css"; 
import AdminRegister from './AdminRegister';
import ResidentRegister from './ResidentRegister';
import SignUp from './SignUp';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../homepage/HomePage';

function Register() {
  const {auth}=useSelector(store=>store)
  return (
    <div className="flex items-center">
      <div className="h-screen w-[50%]">
        <img src="https://i.ibb.co/XyFt845/Form-Image.png" alt="Form-Image" border="0" className="h-screen w-full" />
      </div>
      <div className="h-screen w-[50%]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin-register" element={auth.jwt?<AdminRegister />:<SignUp/>} />
          <Route path="/resident-register" element={auth.jwt?<ResidentRegister />:<SignUp/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Register;
