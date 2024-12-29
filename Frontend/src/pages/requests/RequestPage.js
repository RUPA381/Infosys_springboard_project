import React, { useState } from 'react';
import RequestForm from './RequestForm';
import TotalVendors from './TotalVendors';
import AddVendorModal from './AddVendorModal';
import { useDispatch, useSelector } from 'react-redux';
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import UpdateVendorModal from './UpdateVendorModal';
import { deleteVendor } from '../../redux/request/request.action';

function RequestPage() {
    const societyId = useSelector(store => store.auth.userDetails?.societyId)
    const allVendors = useSelector(store => store.request?.vendors)
    const vendors = allVendors?.filter(vendor => vendor.societyId === societyId);
    const [openModal, setOpenModal] = useState(false);
    const [vendorId, setVendorId] = useState();
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const dispatch = useDispatch();
    const role = useSelector((store) => store.auth.user?.role);
    const loading = useSelector((state) => state.request?.loading);

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleOpenUpdateModal = (vendor) => {
        setSelectedVendor(vendor);
        setOpenUpdateModal(true);
    };

    const handleCloseUpdateModal = () => {
        setOpenUpdateModal(false);
        setSelectedVendor(null);
    };

    const handleBlockClick = (block) => setVendorId(block);

    const handleDelete = (vendorId) => {
        dispatch(deleteVendor(vendorId));
    };

    return (
        <div className="p-5 w-[100%]">
            <h1 className="font-bold text-xl">Select Service Type</h1>
            <div className="flex flex-row space-x-5 my-5 flex-wrap">
                {vendors.length > 0 ? (
                    vendors.map((vendor) => (
                        <button
                            key={vendor.vendorId}
                            className={`px-6 py-2 rounded-3xl text-sm font-semibold shadow-md ${vendorId === vendor.vendorId
                                    ? 'bg-cyan-950 text-white'
                                    : 'bg-white text-cyan-950'
                                }`}
                            onClick={() => handleBlockClick(vendor.vendorId)}
                        >
                            {vendor.service}
                        </button>
                    ))
                ) : (
                    <div className="text-gray-500 font-medium">No services available</div>
                )}
            </div>

            <RequestForm vendorId={vendorId} />
            <TotalVendors totalVendors={vendors.length} />
            <div className="flex flex-row justify-between items-center">
                <div className="w-3/4">
                    <h1 className="font-extrabold text-xl text-cyan-900">Vendors List</h1>
                </div>
                {role === 'Admin' ? (
                    <div className="w-1/4">
                        <button
                            className="bg-cyan-950 text-white px-2 py-1 rounded-lg"
                            onClick={handleModalOpen}
                        >
                            Add Vendor
                        </button>
                        <AddVendorModal open={openModal} close={handleModalClose} />
                    </div>
                ) : null}
            </div>
            <div className="w-[100%] mt-5">
                <table className="border-collapse w-[90%]">
                    <thead>
                        <tr className="border border-gray-300">
                            <td className="p-1.5 font-semibold text-sky-900 opacity-75">No</td>
                            <td className="p-1.5 font-semibold text-cyan-900 opacity-75">Name</td>
                            <td className="p-1.5 font-semibold text-cyan-900 opacity-75">Service</td>
                            <td className="p-1.5 font-semibold text-cyan-900 opacity-75">Company</td>
                            <td className="p-1.5 font-semibold text-cyan-900 opacity-75">Phone No</td>
                            {role === 'Admin' && (
                                <td className="p-1.5 font-semibold text-cyan-900 opacity-75">Actions</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.length > 0 ? (
                            vendors.map((vendor) => (
                                <tr key={vendor.vendorId} className="border border-gray-300 p-1">
                                    <td className="p-1.5">{vendor.vendorId}</td>
                                    <td className="p-1.5">{vendor.name}</td>
                                    <td className="p-1.5">{vendor.service}</td>
                                    <td className="p-1.5">{vendor.company}</td>
                                    <td className="p-1.5">{vendor.phoneNo}</td>
                                    {role === 'Admin' ? (
                                        <td className="p-1.5">
                                            <div className="flex space-x-3 text-sky-900 opacity-75">
                                                <ModeRoundedIcon
                                                    fontSize="10px"
                                                    className="cursor-pointer"
                                                    onClick={() => handleOpenUpdateModal(vendor)}
                                                />
                                                <UpdateVendorModal
                                                    open={openUpdateModal}
                                                    close={handleCloseUpdateModal}
                                                    vendor={selectedVendor}
                                                />
                                                <DeleteRoundedIcon
                                                    fontSize="10px"
                                                    className="cursor-pointer"
                                                    onClick={() => handleDelete(vendor.vendorId)}
                                                />
                                            </div>
                                        </td>
                                    ) : null}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No vendors available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RequestPage;
