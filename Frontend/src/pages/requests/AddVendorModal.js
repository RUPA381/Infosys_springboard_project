import { Backdrop, Box, CircularProgress, Modal } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addVendor } from '../../redux/request/request.action';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height:"80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 5,
    borderRadius: 3,
    outline: "none",
    overflow: "scroll-y",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  };
function AddVendorModal({open,close}) {
    const loading=useSelector(store=>store.request.loading);
    const [formData, setFormData] = useState({
        name: "",
        company:"",
        service: "",
        phoneNo:"",
        email:""
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addVendor({ data: formData }));
        close();
        setFormData({
          name: "",
          company:"",
          service: "",
          phoneNo:"",
          email:""
        })
    };
  return (
    <div className='relative'>
        <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    <Modal open={open} onClose={close}>
        <Box sx={style}>
            <div className='absolute top-5 right-8 cursor-pointer' onClick={close}><CloseIcon/></div>
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Vendor Name here..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none' required onChange={handleChange} value={formData.name}/>
                <input type="text" name="company" placeholder="Enter Company here..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none' required onChange={handleChange} value={formData.company} />
                <input type="text" name="service" placeholder="Enter Service here..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none' required onChange={handleChange} value={formData.service}/>
                <input type="text" name="phoneNo" placeholder="Enter Phone Number here..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none' required onChange={handleChange} value={formData.phoneNo}/>
                <input type="email" name="email" placeholder="Enter email here..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none' required onChange={handleChange} value={formData.email}/>
                <div className='flex flex-row justify-around !mt-5'>
                <button className='px-6 py-1 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white' onClick={close}>Cancel</button>
                <button type="submit" className='px-7 py-1 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white'>Save</button>
                </div>
            </form>
        </Box>
    </Modal>
    </div>
  )
}

export default AddVendorModal