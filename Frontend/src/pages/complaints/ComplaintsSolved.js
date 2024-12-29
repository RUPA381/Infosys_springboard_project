import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
function ComplaintsSolved({solvedComplaints}) {
  return (
    <div className="flex flex-col p-2 space-y-3 bg-violet-300 rounded-md text-violet-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{solvedComplaints}</div>
                <div className='rounded-full bg-white p-0.5'><TaskAltIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Complaints Solved</div>
        </div>
  )
}

export default ComplaintsSolved