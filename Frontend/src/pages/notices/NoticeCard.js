import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateNoticeModal from './UpdateNoticeModal'
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { deleteNotice } from '../../redux/notice/notice.action';
function NoticeCard({ notice }) {
    const role=useSelector(store=>store.auth.user?.role)
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => (setOpenModal(true));
    const handleCloseModal = () => (setOpenModal(false));
    const dispatch = useDispatch();
    const deleteNoticeHandler = (noticeId) => {
        dispatch(deleteNotice(noticeId));
    }
    return (
        <div className='flex bg-white shadow-lg p-3 text-cyan-950 mb-5 border border-gray-200' key={notice.noticeId}>
            <div className='flex flex-row space-x-5 w-3/4' >
                <div><img src={notice.noticeImage} className='w-[5.5rem] h-[5.5rem]' /></div>
                <div className='flex flex-col space-y-3 justify-center'>
                    <h1 className='font-bold text-md'>{notice.heading}</h1>
                    <p className='text-sm'>{notice.content}</p>
                </div>
            </div>
            <div className='w-1/4 flex flex-col items-end justify-between'>
                <div className='text-xs'>
                    <p>{new Date(notice.datePosted).toLocaleDateString()}</p>
                </div>
                {role === "Admin" ?
                    <div className='flex space-x-2'>
                        <button className='text-white bg-cyan-950 rounded-full h-[1.5rem] w-[1.5rem]' onClick={handleOpenModal}><ModeRoundedIcon  fontSize='10px'/></button>
                        <UpdateNoticeModal open={openModal} close={handleCloseModal} notice={notice} />
                        <button className='text-white bg-cyan-950 rounded-full h-[1.5rem] w-[1.5rem]' onClick={() => deleteNoticeHandler(notice.noticeId)}><DeleteRoundedIcon fontSize='10px' /></button>
                    </div> : null}
            </div>
        </div>
    )
}

export default NoticeCard