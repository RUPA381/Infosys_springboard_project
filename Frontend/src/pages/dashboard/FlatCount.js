import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {useSelector } from 'react-redux';
function FlatCount() {
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allFlats=useSelector(store=>store.flats?.flats)
    const flats=allFlats?.filter(flat => flat.societyId === societyId);
  return (
    <div className="flex flex-col w-[20%] p-2 space-y-3 bg-blue-300 rounded-md text-blue-600">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>{flats?.length}</div>
                <div className='rounded-full bg-white p-0.5'><AccountBalanceIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of Flats</div>
        </div>
  )
}

export default FlatCount