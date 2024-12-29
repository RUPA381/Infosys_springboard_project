import React from 'react';
import TotalParkingCard from './TotalParkingCard';
import OccupiedParkingCard from './OccupiedParkingCard';
import UnoccupiedParkingCard from './UnoccupiedParkingCard';
import ParkingList from './ParkingList';
import { useSelector } from 'react-redux';

function ParkingPage() {
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allParking = useSelector(store => store.parking.parkings) || [];
    const parking = allParking?.filter(parking => parking.societyId === societyId);
    const allFlats = useSelector(store => store.flats.flats) || [];
    const flats = allFlats?.filter(flat => flat.societyId === societyId);
    const occupiedFlats = flats.filter(flat => flat.occupied === true);
    const unoccupiedFlats = flats.filter(flat => flat.occupied === false);

    return (
        <div className='p-5'>
            <div className='flex space-x-3'>
                <div className='w-1/5'><TotalParkingCard totalParking={parking.length} /></div>
                <div className='w-1/5'><OccupiedParkingCard occupiedCount={occupiedFlats.length} /></div>
                <div className='w-1/5'><UnoccupiedParkingCard unoccupiedCount={unoccupiedFlats.length} /></div>
            </div>
            <ParkingList parking={parking} flats={occupiedFlats} />
        </div>
    );
}

export default ParkingPage;
