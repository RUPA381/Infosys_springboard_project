import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
function UnoccupiedParkingCard({unoccupiedCount}) {
  return (
    <div className="flex flex-col  p-2 space-y-3 bg-blue-300 rounded-md text-blue-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{unoccupiedCount}</div>
                <div className='rounded-full bg-white p-0.5'><DirectionsCarIcon/></div>
            </div>
            <div className='text-xs text-center'>No of Parking lots Unoccupied</div>
        </div>
  )
}

export default UnoccupiedParkingCard