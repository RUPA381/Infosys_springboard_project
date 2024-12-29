import React from 'react'
import Billing from './Billing'
import { useSelector } from 'react-redux'
import BillsList from './BillsList'
import { Backdrop, CircularProgress } from '@mui/material'

function BillingPage() {
  const role = useSelector(store => store.auth.user?.role)
  const loading = useSelector(store => store.billing.loading)
  return (
    <div className='h-[85%] flex flex-col justify-center items-center'>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {role === "Resident" ? <Billing /> : null}
      {role === "Admin" ? <BillsList /> : null}
    </div>
  )
}

export default BillingPage