import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeComplaint, getAllComplaints } from '../../redux/complaint/complaint.action';
import { Backdrop, CircularProgress } from '@mui/material';

function ComplaintList() {
    const [selectedBlock, setSelectedBlock] = useState("All");
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allComplaints=useSelector(store=>store.complaint?.complaints);
    const complaints=allComplaints.filter(complaint=>complaint.societyId===societyId)
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.complaint?.loading);
    const role=useSelector(store=>store.auth.user?.role);
    
    const handleBlockClick = (block) => {
        setSelectedBlock(block);
    };

    const handleClose = (complaintId) => {
        dispatch(closeComplaint(complaintId));
    };

    useEffect(() => {
        dispatch(getAllComplaints())
    }, [dispatch]);

    const sortedComplaints = complaints.sort((a, b) => b.complaintId - a.complaintId);

    const filteredComplaints = sortedComplaints.filter((complaint) => {
        if (selectedBlock === "All") return true;
        return complaint.status === selectedBlock;
    });

    return (
        <div>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="flex space-x-5">
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "All" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("All")}
                >
                    All
                </button>
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "Open" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("Open")}
                >
                    Open
                </button>
                <button
                    className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${
                        selectedBlock === "Closed" ? "bg-cyan-950 text-white" : "bg-white text-cyan-950"
                    }`}
                    onClick={() => handleBlockClick("Closed")}
                >
                    Closed
                </button>
            </div>
            <div className="flex flex-col p-3">
                <h1 className="py-3 font-semibold">Complaint List</h1>
                <table className="border-collapse">
                    <thead>
                        <tr className="border border-gray-300">
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">No</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Name</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Flat No</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Complaint</td>
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredComplaints.length > 0 ? (
                            filteredComplaints.map((complaint) => (
                                <tr key={complaint.complaintId} className="border border-gray-300">
                                    <td className="p-1.5">{complaint.complaintId}</td>
                                    <td className="p-1.5">{complaint.personName}</td>
                                    <td className="p-1.5">{complaint.flatNo}</td>
                                    <td className="p-1.5">{complaint.description}</td>
                                    <td className="p-1.5">
                                        {complaint.status}
                                        {role=="Admin"?complaint.status === "Open" && (
                                            <span className="p-2">
                                                <button
                                                    className="bg-red-600 rounded-md px-1 py-0.5 text-white"
                                                    onClick={() => handleClose(complaint.complaintId)}
                                                >
                                                    Close
                                                </button>
                                            </span>
                                        ):null}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No complaints available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ComplaintList;
