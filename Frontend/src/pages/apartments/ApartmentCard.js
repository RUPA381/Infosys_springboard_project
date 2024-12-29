import { Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function ApartmentCard({ resident }) {
  return (
    <Card className='p-5 w-[20%]'>
        <div className='flex flex-col space-y-2 text-xs text-gray-600'>
            <h1 className='text-lg font-bold text-black'>{resident?.name}</h1>
            <p>Block - {resident?.flatNo[0]}</p>
            <p><HomeIcon sx={{fontSize:"1rem"}}/><span className='px-2'>{resident?.flatNo}</span></p>
            <p><LocalPhoneIcon  sx={{fontSize:"1rem"}}/><span className='px-2'>{resident?.phoneNo}</span></p>
            <p><EmailIcon  sx={{fontSize:"1rem"}}/><span className='px-2'>{resident?.email}</span></p>
        </div>
    </Card>
  )
}

export default ApartmentCard