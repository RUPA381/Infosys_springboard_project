import { Card, Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
function UserCard(){
    const userRole=useSelector(store=>store.auth.user);
    const user=useSelector(store=>store.auth.userDetails)
    return(
        <div className="flex justify-center items-center h-[85vh]" >
            <Card className='w-[60%] h-[60%] flex'>
                <div className="bg-gradient-to-b from-cyan-950 to-cyan-600 text-white w-[35%] flex flex-col justify-center items-center space-y-3">
                    <h1 className="text-2xl font-bold">{user?.name}</h1>
                    <p>Flat -&nbsp;{userRole?.role==="Resident"?user?.flatNo:"N/A"}</p>
                </div>
                <div className="w-[65%]">
                    <h1 className="p-4 text-cyan-700">INFORMATION</h1>
                    <Divider sx={{backgroundColor: "gray",width:"95%",margin: "auto"}}/>
                    <div className="flex flex-wrap p-4">
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Society Name</h1>
                            <p className="text-xs text-gray-500">{user?.societyName}</p>
                        </div>
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Name</h1>
                            <p className="text-xs text-gray-500">{user?.name}</p>
                        </div>
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Block</h1>
                            <p className="text-xs text-gray-500"> {userRole?.role === "Resident" && user?.flatNo ? user.flatNo[0] : "ADMIN-FLT"}</p>
                        </div>
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Flat No</h1>
                            <p className="text-xs text-gray-500">{userRole?.role==="Resident"?user?.flatNo:"N/A"}</p>
                        </div>
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Phone</h1>
                            <p className="text-xs text-gray-500">{user?.phoneNo}</p>
                        </div>
                        <div className="w-1/2 p-2">
                            <h1 className="text-cyan-950">Email</h1>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default UserCard;