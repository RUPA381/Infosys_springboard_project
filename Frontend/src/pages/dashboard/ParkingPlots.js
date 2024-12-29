import React, { useEffect, useState } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllParking } from '../../redux/parking/parking.action';
function ParkingPlots() {
  const societyId=useSelector(store=>store.auth.userDetails?.societyId)
  const allParking=useSelector(store=>store.parking?.parkings)
  const parking=allParking?.filter(parking=>parking.societyId===societyId)
  return (
    <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{color:"gray"}}>
    <div className="flex flex-row justify-between items-center">
        <div className='font-bold text-4xl'>{parking?.length}</div>
        <div className='rounded-full bg-cyan-950 p-0.5 text-white'><DirectionsCarIcon/></div>
    </div>
    <div className='text-xs text-center'>Total Parking Lots</div>
</Card>
  )
}

export default ParkingPlots