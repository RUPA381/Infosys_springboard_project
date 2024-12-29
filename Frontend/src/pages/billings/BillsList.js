import React from 'react';
import { useSelector } from 'react-redux';

function BillsList() {
        const societyId=useSelector(store=>store.auth.userDetails?.societyId)
        const allPayments = useSelector(store => store.billing.billings)||[];
        const payments = allPayments?.filter(payment => payment.societyId === societyId);
    return (
        <div className='flex flex-col justify-center items-center w-[100%]'>
            <table className="border-collapse w-[80%]">
                <thead>
                    <tr className="border border-gray-300">
                        <td className="p-1.5 font-semibold text-sky-900 opacity-75">No</td>
                        <td className="p-1.5 font-semibold text-sky-900 opacity-75">Flat No</td>
                        <td className="p-1.5 font-semibold text-sky-900 opacity-75">Amount</td>
                        <td className="p-1.5 font-semibold text-sky-900 opacity-75">Payment Date</td>
                        <td className="p-1.5 font-semibold text-sky-900 opacity-75">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {payments.length > 0 ? (
                        payments.map((payment) => (
                            <tr key={payment.paymentId} className="border border-gray-300">
                                <td className="p-1.5">{payment.paymentId}</td>
                                <td className="p-1.5">{payment.flatNo}</td>
                                <td className="p-1.5">{payment.amount}</td>
                                <td className="p-1.5">{payment.paymentDate ? new Date(payment.paymentDate).toLocaleDateString() : null}</td>
                                <td 
                                    className={`p-1.5 font-semibold ${
                                        payment.status === "PAID" 
                                            ? "text-green-700" 
                                            : "text-red-600"
                                    }`}
                                >
                                    {payment.status}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No payments available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BillsList;
