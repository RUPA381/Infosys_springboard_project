import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import {loginUserAction } from '../../redux/authentication/auth.action';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const userDetails=useSelector(store=>store.auth.userDetails);
    const role=useSelector(store=>store.auth.user?.role);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLogged);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("button clicked")
        dispatch(loginUserAction({ data: formData }));
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/community');
        }
    }, [isLoggedIn, navigate]);
    return (
        <div className='bg-slate-200 h-screen w-full p-5'>
            <div className='flex items-center justify-center space-x-3'>
                <div className='w-[15%] h-[15%]'><img src='https://i.ibb.co/8MnzPDm/freepik-background-85678.png' alt="Logo" /></div>
                <div className='flex flex-col items-center text-cyan-950'>
                    <h1 className='text-3xl font-bold'>CommUnity</h1>
                    <p className='text-[10px]'>Seamless Community Interaction and Management</p>
                </div>
            </div>
            <div>
                <h1 className='text-center text-md text-cyan-950 p-4'>Login</h1>
                <h1 className='text-center text-xl text-cyan-950 font-bold'>Welcome Back</h1>
                <div className='flex justify-center'>
                    <form className='flex flex-col space-y-3 w-[60%]' onSubmit={handleSubmit}>
                        <label htmlFor="email" className=' text-cyan-950 text-sm'>EMAIL</label>
                        <input type="email" id="email" name="email" className='h-5 bg-slate-200 border-b border-black focus:outline-none' required onChange={handleChange} value={formData.email} />
                        <label htmlFor="password" className=' text-cyan-950 text-sm'>PASSWORD</label>
                        <input type="password" id="password" name="password" required className='h-5 bg-slate-200 border-b border-black focus:outline-none' onChange={handleChange} value={formData.password} />
                        <button type="submit" className="bg-cyan-950 px-5 py-2 mt-3 rounded-md text-white">Login</button>
                        <p className='text-center'>Not a member?
                            <Link to="/auth/signup">
                                <button className="text-cyan-950">Sign Up</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
