import React from 'react';
import { useSelector } from 'react-redux';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function FlatsOccupiedCount() {
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allFlats=useSelector(store=>store.flats?.flats)
    const flats=allFlats?.filter(flat => flat.societyId === societyId);
    const occupied=flats?.filter(flat => flat.occupied === true);
    return (
        <div className="flex flex-col w-[20%] p-2 space-y-3 bg-sky-200 rounded-md text-sky-600">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{occupied?.length}</div>
                <div className='rounded-full bg-white p-0.5'><AccountBalanceIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Flats Occupied</div>
        </div>
    );
}

export default FlatsOccupiedCount;
