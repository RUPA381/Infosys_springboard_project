import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

function Toast() {
    const message = useSelector(state => state.auth.message);
    const errorMessage= useSelector(state => state.auth.error);

    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [message]);
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [errorMessage]);
  return (
    <div></div>
  )
}

export default Toast