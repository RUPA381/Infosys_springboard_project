import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
function TotalVendors({totalVendors}) {
  return (
    <div className='my-5'>
      <h1 className='font-semibold'>Vendor Services</h1>
      <div className="flex flex-col space-y-3 bg-sky-200 rounded-md text-sky-600  h-[100px] w-[20%] my-5 p-2">
        <div className="flex flex-row justify-between items-center">
          <div className='font-bold text-4xl'>{totalVendors}</div>
          <div className='rounded-full bg-white p-0.5'><SettingsIcon /></div>
        </div>
        <div className='text-xs text-center'>Total No of Services</div>
      </div>
    </div>
  )
}

export default TotalVendors