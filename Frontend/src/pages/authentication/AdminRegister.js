import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAdminDetails } from "../../redux/authentication/auth.action";
import { useNavigate} from "react-router-dom";

function AdminRegister() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNo: "",
        societyName: "",
        societyAddress: "",
        city: "",
        district: "",
        postal: ""
    });
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const jwt=localStorage.getItem('jwt');
        const registerDetails={...formData,jwt}
        dispatch(registerAdminDetails({ data: registerDetails}));
        navigate("/addFlats");
    };

    return (
        <div className="bg-slate-200 h-screen">
            <div className="flex justify-between px-5 py-2">
                <div className="text-xl text-cyan-950 py-7 px-10">Fill these Details to continue</div>
                <img src="https://i.ibb.co/8MnzPDm/freepik-background-85678.png" className="w-[15%] h-[10%]"/>
            </div>
            <div>
                <form className="flex flex-col w-full items-center space-y-3" onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Name" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required/>
                    <input type="text" name="phoneNo" onChange={handleChange} value={formData.phoneNo} placeholder="Phone No" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required/>
                    <input type="text" name="societyName" onChange={handleChange} value={formData.societyName} placeholder="Society Name" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required/>
                    <input type="text" name="societyAddress" onChange={handleChange} value={formData.societyAddress} placeholder="Society Address" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required />
                    <input type="text" name="city" onChange={handleChange} value={formData.city} placeholder="City" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required />
                    <input type="text" name="district" onChange={handleChange} value={formData.district} placeholder="District" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3" required/>
                    <input type="text" name="postal" onChange={handleChange} value={formData.postal} placeholder="Postal" className="h-9 w-3/5 bg-gray-200 border border-slate-400 rounded-md pl-3"required />
                    <button type="submit" className="bg-cyan-950 px-5 py-1 rounded-md text-white">Register</button>
                </form>
            </div>
        </div>
    );
}

export default AdminRegister;
