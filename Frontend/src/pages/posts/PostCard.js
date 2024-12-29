import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModeRoundedIcon from '@mui/icons-material/ModeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import UpdatePostModal from './UpdatePostModal';
import { deletePost } from '../../redux/post/post.action';
function PostCard({ post }) {
    const role=useSelector(store=>store.auth.user?.role)
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => (setOpenModal(true));
    const handleCloseModal = () => (setOpenModal(false));
    const dispatch = useDispatch();
    const deletePostHandler = (postId) => {
        dispatch(deletePost(postId));
    }
    return (
        <div className='flex bg-white shadow-lg p-3 text-cyan-950 mb-5 border border-gray-200' key={post.postId}>
            <div className='flex flex-row space-x-5 w-3/4 cursor-pointer' >
                <div><img src={post.postImage} className='w-[5.5rem] h-[5.5rem]' /></div>
                <div className='flex flex-col space-y-3 justify-center'>
                    <h1 className='font-bold text-md'>{post.title}</h1>
                    <p className='text-sm'>{post.content}</p>
                </div>
            </div>
            <div className='w-1/4 flex flex-col items-end justify-between'>
                {role === "Admin" ?
                    <div className='flex space-x-2'>
                        <button className='text-white bg-cyan-950 rounded-full w-[1.5rem] h-[1.5rem]' onClick={handleOpenModal}><ModeRoundedIcon  fontSize='10px'/></button>
                        <UpdatePostModal open={openModal} close={handleCloseModal} post={post} />
                        <button className='text-white bg-cyan-950 rounded-full w-[1.5rem] h-[1.5rem]' onClick={() => deletePostHandler(post.postId)}><DeleteRoundedIcon fontSize='10px' /></button>
                    </div> : null}
            </div>
        </div>
    )
}

export default PostCard