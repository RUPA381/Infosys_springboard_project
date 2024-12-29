import React from 'react'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
function OccupiedParkingCard({occupiedCount}) {
  return (
    <div className="flex flex-col  p-2 space-y-3 bg-violet-300 rounded-md text-violet-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{occupiedCount}</div>
                <div className='rounded-full bg-white p-0.5'><TimeToLeaveIcon/></div>
            </div>
            <div className='text-xs text-center'>No of Parking lots Occupied</div>
        </div>
  )
}

export default OccupiedParkingCard