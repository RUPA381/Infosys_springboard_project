import React, { useEffect, useState } from 'react'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
function Securities() {
  const societyId=useSelector(store=>store.auth.userDetails?.societyId)
  const allContacts=useSelector(store=>store.contact.contacts)||[]
  const contacts=allContacts?.filter(contact=>contact.societyId===societyId);
  return (
    <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{color:"gray"}}>
    <div className="flex flex-row justify-between items-center">
        <div className='font-bold text-4xl'>{contacts.length}</div>
        <div className='rounded-full bg-cyan-950 p-0.5 text-white'><AccessibilityIcon/></div>
    </div>
    <div className='text-xs text-center'>Total Securities</div>
</Card>
  )
}

export default Securities