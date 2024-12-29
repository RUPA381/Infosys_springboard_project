import React from 'react'
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';
function TotalComplaints({complaintsTotal}) {
  return (
    <div className="flex flex-col p-2 space-y-3 bg-sky-200 rounded-md text-sky-600  h-[100px]">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{complaintsTotal}</div>
                <div className='rounded-full bg-white p-0.5'><SimCardAlertIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Complaints</div>
        </div>
  )
}

export default TotalComplaints