import React from 'react'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
function Vendors() {
  const societyId=useSelector(store=>store.auth.userDetails?.societyId)
  const allVendors=useSelector(store=>store.request?.vendors)
  const vendors=allVendors?.filter(vendor=>vendor.societyId===societyId)
  return (
    <Card className="flex flex-col w-[15%] p-2 space-y-2 rounded-md" sx={{color:"gray"}}>
    <div className="flex flex-row justify-between items-center">
        <div className='font-bold text-4xl'>{vendors?.length}</div>
        <div className='rounded-full bg-cyan-950 p-0.5 text-white'><WorkHistoryIcon/></div>
    </div>
    <div className='text-xs text-center'>Total Vendors</div>
  </Card>
  )
}

export default Vendors