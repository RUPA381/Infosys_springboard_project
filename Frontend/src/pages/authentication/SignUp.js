import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUserAction } from '../../redux/authentication/auth.action';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLogged);
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(registerUserAction({ data: formData }));
       
    };
    useEffect(() => {
        if (isLoggedIn) {
            if (formData.role === "Admin") {
                navigate("/auth/admin-register");
            } else if (formData.role === "Resident") {
                navigate("/auth/resident-register");
            }
        }
    }, [isLoggedIn, formData.role, navigate]);


    return (
        <div className="bg-slate-200 h-screen w-full p-5">
            <div className="flex items-center justify-center space-x-3">
                <div className="w-[15%] h-[15%]">
                    <img src="https://i.ibb.co/8MnzPDm/freepik-background-85678.png" alt="CommUnity Logo" />
                </div>
                <div className="flex flex-col items-center text-cyan-950">
                    <h1 className="text-3xl font-bold">CommUnity</h1>
                    <p className="text-[10px]">Seamless Community Interaction and Management</p>
                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl text-cyan-950 p-5">Sign Up</h1>
                <div className="flex justify-center">
                    <form className="flex flex-col space-y-3 w-[60%]" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="text-cyan-950 text-sm">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="h-5 bg-slate-200 border-b border-black focus:outline-none"
                            required
                        />
                        <label htmlFor="password" className="text-cyan-950 text-sm">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            className="h-5 bg-slate-200 border-b border-black focus:outline-none"
                            required
                        />
                        <label htmlFor="role" className="text-cyan-950 text-sm">ROLE</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="h-5 bg-slate-200 border-b border-black text-sm focus:outline-none"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="Resident">Resident</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <button
                            type="submit"
                            className=" px-5 py-2 mt-3 rounded-md text-white bg-cyan-950"
                        >
                            Sign Up
                        </button>
                        <p className="text-center">
                            Already have an account? 
                            <Link to="/auth">
                                <button className="text-cyan-950">Go to Login</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
