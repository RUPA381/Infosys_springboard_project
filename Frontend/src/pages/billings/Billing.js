import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makePayment } from '../../redux/billing/billing.action';
import { Backdrop, CircularProgress } from '@mui/material';
function Billing() {
    const isLoading = useSelector(store => store.billing.loading);
    const flatNo = useSelector(store => store.auth.userDetails?.flatNo);
    const societyId=useSelector(store=>store.auth.userDetails?.societyId)
    const allPayments = useSelector(store => store.billing.billings)||[];
    const payments = allPayments?.filter(payment => payment.societyId === societyId);
    const [flatBills, setFlatBills] = useState([]); 
    const dispatch = useDispatch();
    const handlePayment = () => {
        dispatch(makePayment());
    };
    useEffect(() => {
        const filteredBills = payments.filter(payment => payment.flatNo === flatNo && payment.status !== "PAID");
        setFlatBills(filteredBills);
    }, [flatNo,payments]);
    return (
        <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            
            {flatBills?.length > 0 ? (
                flatBills.map((bill) => (
                    <div key={bill.flatNo} className='flex flex-col justify-center items-center'>
                        <h1 className="text-lg font-semibold">Monthly Maintenance Bill: ₹{bill.amount}/-</h1>
                        <button
                            className="bg-red-500 text-white py-1 px-3 rounded-xl mt-2 cursor-pointer"
                            onClick={() => handlePayment(bill)}
                        >
                            Pay Now
                        </button>
                    </div>
                ))
            ) : (
                <div className='flex justify-center items-center'>
                    <h2 className='text-2xl font-bold'>No Bills Pending</h2>
                </div>
            )}
        </div>
    );
}

export default Billing;