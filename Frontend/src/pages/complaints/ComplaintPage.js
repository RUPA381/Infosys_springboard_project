import React, { useEffect} from 'react'
import TotalComplaints from './TotalComplaints'
import ComplaintsSolved from './ComplaintsSolved'
import ComplaintsUnsolved from './ComplaintsUnsolved'
import BlockAComplaints from './BlockAComplaints'
import BlockBComplaints from './BlockBComplaints'
import ComplaintForm from './ComplaintForm'
import { useDispatch, useSelector } from 'react-redux'
import ComplaintList from './ComplaintList'
import { Backdrop, CircularProgress } from '@mui/material'
import { getAllComplaints } from '../../redux/complaint/complaint.action'

function ComplaintPage() {
    const loading = useSelector(store => store.complaint?.loading)
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const dispatch=useDispatch();
    const role = useSelector(store => store.auth.user?.role);
    const allComplaints=useSelector(store=>store.complaint?.complaints);
    const complaints=allComplaints?.filter(c => c.societyId === societyId);
    const solvedComplaints=complaints.filter(c => c.status === "Closed");
    const unsolvedComplaints=complaints.filter(c => c.status === "Open");
    const complaintsBlockA=complaints.filter(c => c.flatNo[0] === "A");
    const complaintsBlockB=complaints.filter(c => c.flatNo[0] === "B");
    useEffect(() => {
        dispatch(getAllComplaints())
    }, [dispatch])
    return (
        <div className='py-5 gap-2'>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className='flex flex-wrap gap-3 justify-center'>
                <div className="w-1/6">
                    <TotalComplaints complaintsTotal={complaints.length} />
                </div>
                <div className="w-1/6">
                    <ComplaintsSolved solvedComplaints={solvedComplaints.length} />
                </div>
                <div className="w-1/6">
                    <ComplaintsUnsolved unsolvedComplaints={unsolvedComplaints.length} />
                </div>
                <div className="w-1/6">
                    <BlockAComplaints complaintsBlockA={complaintsBlockA.length} />
                </div>
                <div className="w-1/6">
                    <BlockBComplaints complaintsBlockB={complaintsBlockB.length} />
                </div>
            </div>
            <div className='px-10 py-5 flex flex-col space-y-5'>
                {role === "Resident" ? <ComplaintForm /> : null}
                <ComplaintList />
            </div>
        </div>
    )
}
export default ComplaintPage