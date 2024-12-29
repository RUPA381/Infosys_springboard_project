import React, { useState } from 'react'
import { Backdrop, Box, CircularProgress, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../../redux/events/event.action';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    height: '60%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    borderRadius: 3,
    outline: 'none',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
function FeedBackModal({open,close,eventId}) {
    const [content,setContent]=useState();
    const dispatch=useDispatch();
    const loading=useSelector(store=>store.event.loading);
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(addFeedback(content,eventId));
      close();
      setContent("")
    }
  return (
    <div>
    <Modal open={open} onClose={close}>
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
        <Box sx={style}>
            <div className='absolute top-5 right-8 cursor-pointer' onClick={close}><CloseIcon/></div>
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
                <textarea type="text" name="content" placeholder="Enter your Feedback..." className='border border-gray-300 shadow-lg p-1 rounded-md focus:outline-none h-[100px]' required value={content}  onChange={(e) => setContent(e.target.value)}/>
                <div className='flex flex-row justify-around !mt-5'>
                <button className='px-6 py-1 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white' onClick={close}>Cancel</button>
                <button type="submit" className='px-7 py-1 rounded-xl text-sm border border-2 border-cyan-950 hover:bg-cyan-950 hover:text-white'>Submit</button>
                </div>
            </form>
        </Box>
        </div>
    </Modal>
    </div>
  )
}

export default FeedBackModal