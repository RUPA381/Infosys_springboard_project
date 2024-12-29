import React from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
function TotalParkingCard({totalParking}) {
  return (
    <div className="flex flex-col  p-2 space-y-3 bg-sky-200 rounded-md text-sky-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{totalParking}</div>
                <div className='rounded-full bg-white p-0.5'><DirectionsCarIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Parking Plots</div>
        </div>
  )
}

export default TotalParkingCard