import React from 'react'
import NoteAltIcon from '@mui/icons-material/NoteAlt';
function ComplaintsUnsolved({unsolvedComplaints}) {
  return (
        <div className="flex flex-col p-2 space-y-3 bg-blue-200 rounded-md text-blue-600 h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{unsolvedComplaints}</div>
                <div className='rounded-full bg-white p-0.5'><NoteAltIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Complaints Unsolved</div>
        </div>
  )
}

export default ComplaintsUnsolved